const { deleteFile } = require("../../utils/deleteFile");
const Game = require("../models/gameModels");



const getGames = async (req, res, next) => {
    try {


        const allGames = await Game.find().populate('consoles');

        return res.status(200).json(allGames);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const createGame = async (req, res, next) => {
    try {

        const newGame = new Game(req.body);

        if (req.file) {

            newGame.gameImg = req.file.path;
        }


        const gameSaved = await newGame.save()

        return res.status(201).json(gameSaved);
    } catch (error) {
        return res.status(400).json("Ha fallado la petición")
    }
}



const getGameById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const game = await Game.findById(id).populate('consoles');

        return res.status(200).json(game);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const updateGame = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newGame = new Game(req.body);

        newGame._id = id;

        if (req.file) {
            newGame.gameImg = req.file.path;
            const oldGame = await Game.findById(id);
            deleteFile(oldGame.gameImg);
        }


        const up = await Game.findByIdAndUpdate(id, newGame, { new: true });
        return res.status(200).json(up)



    } catch (error) {
        return res.status(400).json("Error")

    }
}


const deleteGame = async (req, res, next) => {

    try {

        const { id } = req.params;
        const gameDeleted = await Game.findByIdAndDelete(id);

        deleteFile(gameDeleted.gameImg);

        return res.status(200).json(gameDeleted);

    } catch (error) {
        return res.status(400).json("Error");
    }
}


module.exports = { getGames, getGameById, createGame, updateGame, deleteGame }