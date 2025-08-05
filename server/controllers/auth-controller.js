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
        res.status(201).json({msg: "registration done", token: await result.generateToken(), userID: result._id.toString()});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}