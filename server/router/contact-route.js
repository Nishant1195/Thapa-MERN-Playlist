import express from "express";
import contactForm from "../controllers/contact-controller.js"
import contactSchema from "../validator/contact-validator.js";
import contactvalidator from "../middlewares/contact-validate-middleware.js";

const router = express.Router();

router.route("/contact").post(contactvalidator(contactSchema),contactForm);

export default router;