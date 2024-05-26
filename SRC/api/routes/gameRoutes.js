const { isAuth } = require("../../middlewares/auth");
const { checkRole } = require("../../middlewares/checkRole");
const upload = require("../../middlewares/file");
const { getGames, getGameById, createGame, updateGame, deleteGame } = require("../controllers/gameControllers");

const gameRoutes = require("express").Router();

gameRoutes.get("/", getGames);
gameRoutes.get("/:id", getGameById);
gameRoutes.post("/", [isAuth, checkRole], upload.single("image"), createGame)
gameRoutes.put("/:id", [isAuth, checkRole], updateGame);
gameRoutes.delete("/:id", [isAuth, checkRole], deleteGame);

module.exports = gameRoutes;