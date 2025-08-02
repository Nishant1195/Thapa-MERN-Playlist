import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.status(200).send("Welcome to technical thapa mern stack series");
})

app.get("/register", (req, res) => {
    res.status(200).send("Welcome to register page");
})

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})
