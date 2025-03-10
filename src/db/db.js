import mongoose from "mongoose";
import { DB_name } from "../constants.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectdb = async () => {
    try {

        const MONGO_URI = process.env.MONGODB_URI;  // Ensure case matches .env file
        if (!MONGO_URI) {
            throw new Error("MongoDB URI is missing in environment variables.");
        }
        await mongoose.connect(`${MONGO_URI}/${DB_name}`);

        console.log(" Database connected successfully!");

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

export default connectdb;
