import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/thapa_mern"

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