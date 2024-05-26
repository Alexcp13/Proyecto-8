const User = require("../api/models/userModels");
const { verifyJwt } = require("../config/jwt");

const isAuth = async (req, res, next) => {

    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json("No estás autorizado")
        }
        //Importante este espacio ----->
        const parsedToken = token.replace("Bearer ", "")
        const { _id } = verifyJwt(parsedToken);


        const user = await User.findById(_id)


        user.password = null

        req.user = user;
        next()
    } catch (error) {
        return res.status(400).json("No estas autorizado");

    }
}

module.exports = { isAuth }