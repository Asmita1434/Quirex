import mongoose from "mongoose";
export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log("DB connected successfully to Atlas");
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
};
