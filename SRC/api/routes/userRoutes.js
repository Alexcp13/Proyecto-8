const { isAuth } = require("../../middlewares/auth");
const { checkRole } = require("../../middlewares/checkRole");
const { registerUser, login, deleteUser, getUsers, getUserById, updateUser } = require("../controllers/userControllers");

const usersRoutes = require("express").Router();


usersRoutes.get("/", [isAuth], getUsers)
usersRoutes.get("/:id", [isAuth], getUserById);
usersRoutes.post("/register", registerUser)
usersRoutes.post("/login", login)
usersRoutes.put("/:id", [isAuth, checkRole], updateUser);
usersRoutes.delete("/id", [isAuth, checkRole], deleteUser)





module.exports = usersRoutes;