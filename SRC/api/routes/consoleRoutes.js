const { isAuth } = require("../../middlewares/auth");
const { checkRole } = require("../../middlewares/checkRole");
const { getConsoles, getConsoleById, createConsole, updateConsole, deleteConsole } = require("../controllers/consoleControllers");

const consoleRoutes = require("express").Router();

consoleRoutes.get("/", getConsoles);
consoleRoutes.get("/:id", getConsoleById);
consoleRoutes.post("/", [isAuth, checkRole], createConsole)
consoleRoutes.put("/:id", [isAuth, checkRole], updateConsole);
consoleRoutes.delete("/:id", [isAuth, checkRole], deleteConsole);

module.exports = consoleRoutes;