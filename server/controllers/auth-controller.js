import bcrypt from "bcryptjs";
import User from "../model/user-model.js";
import generateToken from "../model/user-model.js"

export const home = (req, res) => {
    try {
       res.status(200).send("Nishant Talekar")
    
   } catch (error) {
    res.status(400).send("Home page not found")
   }
}

export const registration = async (req, res) => {
    try {
        const {username, email, phoneno, password} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({error: "user email already exists"})
        }
        
        const result = await User.create({username, email, phoneno, password})
        res.status(201).json({msg: "Registration Successful", token: await result.generateToken(), userID: result._id.toString()});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExists = await User.findOne({email});

        if(!userExists){
            return res.status(400).json({msg: "Invalide Credentials"});
        }

        // const user = await bcrypt.compare(password, userExists.password);

        const user = userExists.comparePassword(password);

        if(user){
            return res.status(200).json({msg: "Login Successful", token: await userExists.generateToken(), userID: userExists._id.toString()});
        }else{
            return res.status(401).json({msg: "Invalide Credentials"});
        }


    } catch (error) {
        console.log("Error at Login Route", error);
        res.status(500).json({msg: "Internal Server Error"})
    }
}