import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
   res.status(200).send("Nishant Talekar")
})

router.route("/registration").get((req,res)=> {
    res.status(200).send("Registration Page");

})
export default router