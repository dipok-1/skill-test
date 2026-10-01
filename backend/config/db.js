import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect('MONGO_URI_PLACEHOLDER');
        console.log("mongodb connected")
    } catch (error) {
        console.log("Failed to connect DB", error)
    }
}