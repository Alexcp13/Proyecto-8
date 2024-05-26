const User = require("../api/models/userModels");
const { verifyJwt } = require("../config/jwt");


const checkRole = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const parsedToken = token.replace("Bearer ", "");

        const { _id } = verifyJwt(parsedToken);

        const user = await User.findById(_id);

        if (user.rol === "admin") {
            user.password = null;
            req.user = user;
            next();
        } else {
            return res.status(400).json("Esta acción sólo la pueden realizar los administradores")
        }


    } catch (error) {
        return res.status(400).json("No estás autorizado");
    }
}


module.exports = { checkRole }