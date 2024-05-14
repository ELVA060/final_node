const authServices = require("../services/authServices");
const User = require("../models/user");

function login(req, res) {
    const { email, contraseña } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ message: "Credenciales inválidas" });
            }
            const match = contraseña === user.contraseña;
            if (!match) {
                return res.status(401).json({ message: "Credenciales inválidas" });
            }
            const token = authServices.generateToken(user);
            res.json({ token });
        })
        .catch((err) => {
            console.error(error);
            res.status(500).json({ message: "Error al iniciar sesión" });
        });
}
function logout(req,res){
   
    res.status(200).json({ message: "Sesion cerrada exitosamente" });
    }

    module.exports={
        login,
        logout
    }