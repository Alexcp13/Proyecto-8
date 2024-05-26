require("dotenv").config()

const express = require("express");

const { connectDB } = require("./SRC/config/db");
const usersRoutes = require("./SRC/api/routes/userRoutes");
const consoleRoutes = require("./SRC/api/routes/consoleRoutes");
const gameRoutes = require("./SRC/api/routes/gameRoutes");
const cloudinary = require("cloudinary").v2


const app = express();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


app.use(express.json());




connectDB();

app.use("/api/v1/users", usersRoutes);

app.use("/api/v1/consoles", consoleRoutes)

app.use("/api/v1/games", gameRoutes)



app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})


app.listen(3000, () => {
    console.log("el servidor esta funcionando en: http://localhost:3000")
})