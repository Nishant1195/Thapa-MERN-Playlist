export const home = (req, res) => {
    try {
       res.status(200).send("Nishant Talekar")
    
   } catch (error) {
    res.status(400).send("Home page not found")
   }
}

export const registration = (req, res) => {
    try {
        res.status(200).json(req.body);
    } catch (error) {
        res.status(400).json({msg:"Page not found"});
    }
}