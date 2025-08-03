import { Type } from "lucide-react";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        Type: String,
        require:true
    },
    email:{
        Type: String,
        require:true
    },
    phoneno:{
        Type: String,
        require:true
    },
    password:{
        Type: String,
        require:true
    },
    isAdmin: {
        Type:Boolean,
        require:true
    }
})

const User = new mongoose.model("User", userSchema);

export default User;