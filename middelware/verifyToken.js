const jwt = require("jsonwebtoken")

function veryfyToken(req,res,next){
return new Promise((resolve, reject) => { const token = req.headers.autorization 

if (!token) {
    reject({
        status: 401, message: "Codigo de autenticacion no proporcionado"
    });
}

jwt.verify(
    token.split("")[1],
    "99d8ac0f78a3ceee97001445eea580bee7f9a00ec10f35f01542ec3e56f0f2b9",
    (error, decodedToken) => {
        if (error) {
            reject({
                status: 401,
                message: "Token de autorizacion no valido"
            });
        } else {
            req.userId = decodedToken.userId;
            resolve();
        }
    }
)
})
.then(()=>next())
.catch((error) => 
    res.status(error.status||500).json({ message:error.menssage})
)
}
module.exports=veryfyToken
