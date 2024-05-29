const mongoose = require("mongoose");


const gameSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        gameImg: { type: String, required: true },
        genre: { type: String, trim: true, required: true },
        price: { type: Number, required: true },
        consoles: [{

            type: mongoose.Schema.Types.ObjectId,
            ref: 'consoles'
        }]

    },

    {

        timestamps: true,
        collection: "games"
    }
);

const Game = mongoose.model("games", gameSchema, "games");

module.exports = Game;
