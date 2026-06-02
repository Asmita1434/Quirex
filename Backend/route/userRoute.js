import express from 'express';
import { userModel, propertyModel, buyerModel, contactModel } from '../model/table.js';
const router = express.Router();
router.post('/user-register', async (req, res) => {
  try {
    const { name, email, password, contact, address } = req.body;
    const { profile } = req.files;
    profile.mv("uploads/" + profile?.name, (err) => {
      if (err) {
        res.json({
          code: 400,
          message: "Error in File Upload.",
          data: ''
        })
      }
    }
    )
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      res.json({
        code: 400,
        message: "User already exist.",
        data: isExist
      })
    } else {
      const data = new userModel({ name, email, password, contact, address, profile: profile?.name });
      const result = await data.save();
      res.json({
        code: 200,
        message: "User Register  Successfully...",
        data: result
      })
    }
  } catch (err) {
    res.json({
      code: 500,
      message: "Internal Server Error",
      data: ''
    })
  }
})

router.put('/user-update', async (req, res) => {
  try {
    const { name, email, password, contact, address, userId } = req.body;
    const { profile } = req.files;
    profile.mv("uploads/" + profile?.name, (err) => {
      if (err) {
        res.json({
          code: 400,
          message: "Error in file upload"
        })
      }
    })
    const result = await userModel.findByIdAndUpdate({ _id: userId }, { name, email, password, contact, address, profile: profile?.name })
    if (result) {
      res.json({
        code: 200,
        message: "User Updated Successfully",
        data: result
      })
    } else {
      res.json({
        code: 400,
        message: "User Updated Failed",
        data: ''
      })
    }
  } catch (err) {
    res.json({
      code: 500,
      message: "Error in file upload"
    })

  }

})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);
    const users = await userModel.find({});
    console.log("TOTAL USERS:", users.length);
    console.log("USERS:", users);
    const user = await userModel.findOne({ email });
    console.log("SEARCH EMAIL:", email);
    console.log("FOUND USER:", user);
    if (!user) {
      return res.json({
        code: 400,
        message: "Email not found",
        data: ""
      });
    }

    if (user.password !== password) {
      return res.json({
        code: 400,
        message: "Wrong password",
        data: ""
      });
    }

    return res.json({
      code: 200,
      message: "Login Successfully",
      data: user
    });

  } catch (err) {
    console.log("LOGIN ERROR =>", err);

    res.json({
      code: 500,
      message: err.message,
      data: ""
    });
  }
});

router.post('/buy', async (req, res) => {
  try {
    const { userId, propertyId } = req.body;
    const isSold = await buyerModel.findOne({ propertyId })
    if (isSold) {
      res.json({
        code: 400,
        message: "Property Already Sold.",
        data: isSold
      })
    } else {
      const data = new buyerModel({ userId, propertyId });
      const result = await data.save();
      res.json({
        code: 200,
        message: "Property Bought Successfully..",
        data: result
      })
    }
  } catch (err) {
    res.json({
      code: 500,
      message: "Internal Server Error",
      data: ''
    })
  }
})

router.post('/user-bought-list', async (req, res) => {
  try {
    const { userId } = req.body;
    const raw = await buyerModel.find({ userId });
    const finalData = await Promise.all(
      raw?.map(async (item) => {
        const propertyData = await propertyModel.findOne({ _id: item?.propertyId });
        return {
          _id: item?._id,
          propertyId: propertyData?._id,
          title: propertyData?.title,
          price: propertyData?.price,
          area: propertyData?.area,
          location: propertyData?.location,
          description: propertyData?.description,
          pic: propertyData?.pic
        }
      })
    )
    res.json({
      code: 200,
      message: "Data fetched successfully.",
      data: finalData
    })

  } catch (err) {
    res.json({
      code: 500,
      message: "Internal Server Error",
      data: ''
    })
  }
})

router.post('/contact-us', async (req, res) => {
  try {
    const { name, email, contact, subject, message } = req.body;
    const data = new contactModel({ name, email, contact, subject, message });
    const result = await data.save();
    res.json({
      code: 200,
      message: "Message send Successfully...",
      data: result
    })

  } catch (err) {
    res.json({
      code: 500,
      message: "Internal Server Error",
      data: ''
    })
  }

})

router.post('/search', async (req, res) => {
  try {
    const location = req.body.location.trim();

    const result = await propertyModel.find({
      location: {
        $regex: location,
        $options: "i"
      }
    });

    if (result.length > 0) {
      res.json({
        code: 200,
        message: "Property Found",
        data: result
      });
    } else {
      res.json({
        code: 400,
        message: "No Property Registered",
        data: []
      });
    }

  } catch (err) {
    console.log(err);

    res.json({
      code: 500,
      message: "Internal Server Error",
      data: []
    });
  }
});

router.get('/search-list', async (req, res) => {
  try {
    const location = req.query.location?.trim();

    const result = await propertyModel.find({
      location: {
        $regex: location,
        $options: "i"
      }
    });

    if (result.length > 0) {
      res.json({
        code: 200,
        message: "Data fetched successfully",
        data: result
      });
    } else {
      res.json({
        code: 400,
        message: "Data Not Found",
        data: []
      });
    }

  } catch (err) {
    console.log(err);

    res.json({
      code: 500,
      message: "Internal Server Error",
      data: []
    });
  }
});

router.get('/locations', async (req, res) => {
  try {
    const locations = await propertyModel.distinct('location');

    res.json({
      code: 200,
      data: locations
    });

  } catch (err) {
    console.log(err);

    res.json({
      code: 500,
      data: []
    });
  }
});

export default router;