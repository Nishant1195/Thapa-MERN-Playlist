import express from "express";
import router from "./router/auth-route.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/auth", router);

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})
