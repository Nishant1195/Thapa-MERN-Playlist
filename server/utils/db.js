import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Successfully Connected");
        
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database!");
        process.exit();
        
    }

}

export default connectDB;