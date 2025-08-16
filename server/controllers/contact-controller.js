import Contact from "../model/contact-model.js";

const contactForm = async (req, res) => {
    try {
        const contactinfo = req.body;
        await Contact.create(contactinfo);
        res.status(201).json({msg:"Message sent Successfully"});
    } catch (error) {
        res.status(400).json({err:"Contact Form Error"});
    }
}

export default contactForm;