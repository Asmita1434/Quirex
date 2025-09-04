import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/db.js';
import router from './route/userRoute.js';
import adminRoute from './route/adminRoute.js'
import fileUpload from 'express-fileupload';
import cors from 'cors';


dotenv.config();
console.log("MONGO_URL from env:", process.env.MONGO_URL);


const app = express();


app.use(express.json());
app.use(fileUpload());
app.use(cors({
    origin: "http://localhost:5173", // frontend ka URL
    credentials: true
}));



const PORT = process.env.PORT || 9000;


dbConnect();

app.use('/img',express.static('uploads'));
app.use('/api', router);
app.use('/api', adminRoute)



app.get("/test", (req, res) => {
    res.send("API is working!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
})