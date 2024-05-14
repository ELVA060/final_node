const User = require("../models/user")
const user = require("../models/user")
function getCurrentUser(req, res) {
    new Promise((resolve, reject) => {
        const userId = req.userId
        User.findById(userId)
            .then(user => {
                if (!user) {
                    reject({
                        status: 404,
                        message: "Usuario no encontrado"
                    });
                } else {

                    resolve();
                }
            })
            .catch(error =>
                reject({ status: 500, message: "Error al obtener la informacion del usuario", error }))
    })
        .then(user => res.json(user))
        .catch(error =>{
            console.error(error)
            res.status(error.status || 500).json({ message: error.menssage })
        })
}
module.exports= {getCurrentUser}