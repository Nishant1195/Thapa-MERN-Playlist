import express from "express";
import router from "./router/auth-route.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/error-middleware.js";

dotenv.config();



const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/auth", router);

app.use(errorMiddleware);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening to Port: ${PORT}`)
    })

})
