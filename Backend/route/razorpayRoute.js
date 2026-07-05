import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpayRoute = express.Router();

const getRazorpayInstance = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    const err = new Error('Razorpay credentials are missing from environment variables');
    err.statusCode = 401;
    throw err;
  }

    return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
    // api keys are used for authentication; no other config needed
  });
};

razorpayRoute.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body || {};

    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt < 100) {
      return res.status(400).json({
        code: 400,
        message: 'Invalid amount. Minimum is 100 paise.',
        data: '',
      });
    }

    const safeReceiptRaw = receipt || `receipt_${Date.now()}`;
    // Razorpay receipt has a max length of 40 characters
    const safeReceipt = String(safeReceiptRaw).slice(0, 40);


    const razorpay = getRazorpayInstance();
    const order = await razorpay.orders.create({
      amount: amt,
      currency,
      receipt: safeReceipt,
    });

    return res.json({
      code: 200,
      message: 'Order created successfully',
      data: {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });
  } catch (err) {
    const status = err?.statusCode || 500;

    if (status === 401) {
      return res.status(401).json({
        code: 401,
        message: 'Razorpay authentication failed',
        data: '',
      });
    }

    console.error('create-order error:', err);
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      data: '',
    });
  }
});

razorpayRoute.post('/verify-payment', async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body || {};

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return res.status(400).json({
        code: 400,
        message: 'Missing required fields for verification',
        data: '',
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return res.status(500).json({
        code: 500,
        message: 'Razorpay key secret missing',
        data: '',
      });
    }

    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        code: 400,
        message: 'Signature mismatch',
        data: '',
      });
    }

    return res.json({
      code: 200,
      message: 'Payment verified successfully',
      data: {
        razorpay_payment_id,
        razorpay_order_id,
      },
    });
  } catch (err) {
    console.error('verify-payment error:', err);
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      data: '',
    });
  }
});

export default razorpayRoute;
