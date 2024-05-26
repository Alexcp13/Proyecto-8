const mongoose = require("mongoose");


const consoleSchema = new mongoose.Schema(
    {

        model: { type: String, trim: true, required: true },
        price: { type: Number, required: true },



    },
    {

        timestamps: true,
        collection: "consoles"
    }
);

const Console = mongoose.model("consoles", consoleSchema, "consoles");

module.exports = Console;
