import express from "express";
import {home, registration, login} from "../controllers/auth-controller.js"
import signupSchema from "../validator/auth-validator.js";
import validate from "../middlewares/validator-middleware.js";

const router = express.Router();

router.route("/").get(home);

router.route("/registration").post(validate(signupSchema), registration);

router.route("/login").post(login);

export default router