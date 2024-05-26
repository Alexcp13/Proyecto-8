const { generateSign } = require("../../config/jwt");
const User = require("../models/userModels")
const bcrypt = require("bcrypt")

const registerUser = async (req, res, next) => {


    try {
        req.body.rol = "user"
        const newUser = new User(req.body);
        console.log(req.body)


        const userDuplicated = await User.findOne({ userName: req.body.userName });
        console.log(userDuplicated)

        const emailDuplicated = await User.findOne({ email: req.body.email });

        if (userDuplicated) {
            return res.status(400).json("Ese nombre de usuario ya existe")
        }
        if (emailDuplicated) {
            return res.status(400).json("Correo electronico ya en uso")
        }


        const userSaved = await newUser.save();

        return res.status(201).json(userSaved);
    } catch (error) {
        return res.status(400).json(error)

    }
}

const login = async (req, res, next) => {


    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) {
            return res.status(400).json("El usuario o la contraseña son incorrectos");
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {

            const token = generateSign(user);
            return res.status(200).json({ user, token });
        } else {
            return res.status(400).json("El usuario o la contraseña son incorrectos");
        }

    } catch (error) {
        return res.status(400).json(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDeleted = await User.findByIdAndDelete(id);
        return res.status(200).json({
            mensaje: "Este usuario ha sido elimiando",
            userDeleted
        })


    } catch (error) {
        return res.status(400).json(error);
    }
}

const getUsers = async (req, res, next) => {

    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        return res.status(200).json(user);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newUser = new User(req.body);

        newUser._id = id;

        const up = await User.findByIdAndUpdate(id, newUser, { new: true });
        return res.status(200).json(up)



    } catch (error) {
        return res.status(400).json("Error")

    }
}



module.exports = { registerUser, login, deleteUser, getUsers, updateUser, getUserById }