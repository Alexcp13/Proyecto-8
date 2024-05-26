const mongoose = require("mongoose");


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("La base de datos funciona")
    } catch (error) {
        console.log("Fallo base de datos")
    }
}


module.exports = { connectDB }