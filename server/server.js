import express from "express";
import authRoute from "./router/auth-route.js";
import contactRoute from "./router/contact-route.js"
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/error-middleware.js";

dotenv.config();



const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute)

app.use(errorMiddleware);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening to Port: ${PORT}`)
    })

})
