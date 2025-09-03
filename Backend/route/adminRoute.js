import express from 'express';
import { propertyModel, buyerModel, userModel, contactModel } from '../model/table.js'
const adminRoute = express.Router();
adminRoute.post('/add-property', async (req, res) => {
    try {
        const { title, price, area, description, location } = req.body;
        const { pic } = req.files;
        pic.mv("uploads/" + pic?.name, (err) => {
            if (err) {
                res.json({
                    code: 400,
                    message: "Error in File Upload.",
                    data: ''
                })
            }
        })
        const isExist = await propertyModel.findOne({ title });
        if (isExist) {
            res.json({
                code: 400,
                message: "Property Already Exist.",
                data: isExist
            })
        } else {

            const data = new propertyModel({ title, price, area, description, location, pic: pic?.name })
            const result = await data.save();
            res.json({
                code: 200,
                message: "Property Added Successfully..",
                data: result
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: ''
        })
    }


})

adminRoute.get('/property-list', async (req, res) => {
    try {
        const result = await propertyModel.find();
        if (result?.length > 0) {
            res.json({
                code: 200,
                message: "Data fetched successfully..",
                data: result
            })
        } else {
            res.json({
                code: 400,
                message: "Data Not Found.",
                data: []
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: []
        })
    }
})

adminRoute.post('/contact-us-list', async (req, res) => {
    try {
        const data = await contactModel.find();
        const finalData = await Promise.all(
            data.map(async (item) => {
                const contactData = await contactModel.findOne({ _id: item?._id });
                return contactData;
            })

        )
        res.json({
            code: 200,
            message: "Data fetched successfully",
            data: finalData
        })

    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: []
        })
    }

})

adminRoute.get('/admin-sold-list', async (req, res) => {
    try {

        const raw = await buyerModel.find();
        const finalData = await Promise.all(
            raw?.map(async (item) => {
                const propertyData = await propertyModel.findOne({ _id: item?.propertyId });
                const userData = await userModel.findOne({ _id: item?.userId });
                return {
                    _id: item?._id,
                    propertyId: propertyData?._id,
                    title: propertyData?.title,
                    price: propertyData?.price,
                    area: propertyData?.area,
                    location: propertyData?.location,
                    description: propertyData?.description,
                    pic: propertyData?.pic,
                    name: userData?.name,
                    email: userData?.email,
                    contact: userData?.contact,


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

adminRoute.post('/delete-property', async (req, res) => {

    try {
        const { _id } = req.body;
        const result = await propertyModel.findByIdAndDelete({ _id })
        if (result) {
            res.json({
                code: 200,
                message: "Property Deleted Successfully.",
                data: ''
            })
        } else {
            res.json({
                code: 400,
                message: "Property Delete failed.",
                data: ''
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: ''
        })
    }


})


adminRoute.post("/delete-sold-property", async (req, res) => {
    try {
        const { _id } = req.body;
        const result = await buyerModel.findByIdAndDelete({ _id });
        if (result) {
            res.json({
                code: 200,
                message: "Property deleted successfully!",
                data: result
            })
        } else {
            res.json({
                code: 400,
                message: "Property deletion failed!",
                data: result
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error",
            data: [],
        });
    }
});

adminRoute.get('/admin-user-list', async (req, res) => {
    try {
        const result = await userModel.find({userType:"user"});
        if (result?.length > 0) {
            res.json({
                code: 200,
                message: "Data fetched successfully..",
                data: result
            })
        } else {
            res.json({
                code: 400,
                message: "Data Not Found.",
                data: []
            })
        }
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: []
        })
    }
})

export default adminRoute;