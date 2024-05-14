const User = require("../models/user")


function getAllUsers(req,res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => {
            console.error(err)
            res.status(500).send( "Error al obtener usuario");
        })
}

function crearUser(req,res) {
    const {nombre, edad, email, contraseña} = req.body;

    User.create({ nombre, edad, email, contraseña })
        .then((newUser) => res.status(201).json(newUser))
        .catch((err) => {
            console.error(err); res.status(500).send( "Error al crear  usuario");
        })
}

function updateUser(req, res) {
    const userId = req.params.id
    const updateUser = req.body
    User.findByIdAndUpdate(userId, updateUser, { new: true })
        .then(user => res.status(200).json(user))
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error al actualizar  usuario");
        })
}

function deleteUser(req, res) {
    const userId = req.params.id;

    User.findByIdAndDelete(userId)
        .then(() => res.status(200).send("Usuario Eliminado"))
        .catch((err) => {
            console.error(err);
            res.status(500).send( "Error al eliminar  usuario");
        })
}

module.exports = { crearUser, updateUser, deleteUser, getAllUsers }