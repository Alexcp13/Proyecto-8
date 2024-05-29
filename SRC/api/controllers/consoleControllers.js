const Console = require("../models/consoleModels");


const getConsoles = async (req, res, next) => {
    try {


        const allConsoles = await Console.find();

        return res.status(200).json(allConsoles);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const createConsole = async (req, res, next) => {
    try {

        const newConsole = new Console(req.body)

        if (req.file) {

            newGame.consoleImg = req.file.path;
        }

        const consoleSaved = await newConsole.save()

        return res.status(201).json(consoleSaved);
    } catch (error) {
        return res.status(400).json("Ha fallado la petición")
    }
}



const getConsoleById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const console = await Console.findById(id);

        return res.status(200).json(console);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const updateConsole = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newConsole = new Console(req.body);

        newConsole._id = id;

        if (req.file) {
            newConsole.consoleImg = req.file.path;
            const oldConsole = await Console.findById(id);
            deleteFile(oldConsole.consoleImg);
        }


        const up = await Console.findByIdAndUpdate(id, newConsole, { new: true });
        return res.status(200).json(up)



    } catch (error) {
        return res.status(400).json("Error")

    }
}


const deleteConsole = async (req, res, next) => {

    try {

        const { id } = req.params;
        const consoleDeleted = await Console.findByIdAndDelete(id);

        deleteFile(consoleDeleted.consoleImg);

        return res.status(200).json(consoleDeleted);

    } catch (error) {
        return res.status(400).json("Error");
    }
}


module.exports = { getConsoles, getConsoleById, createConsole, updateConsole, deleteConsole }