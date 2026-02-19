import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/db.js';
import router from './route/userRoute.js';
import adminRoute from './route/adminRoute.js'
import fileUpload from 'express-fileupload';
import cors from 'cors';


dotenv.config();
const mongoURL = process.env.ATLASDB_URL;
console.log("MONGO_URL from env:", mongoURL);

const app = express();

app.use(express.json());
app.use(fileUpload());
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:4173",
    "https://quirex-frontend.onrender.com"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));




const PORT = process.env.PORT || 9000;


dbConnect();

app.use('/img', express.static('uploads'));
app.use('/api', router);
app.use('/api', adminRoute)



app.get("/test", (req, res) => {
    res.send("API is working!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
})