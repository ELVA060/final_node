
const mongoose= require("mongoose");
const mongooseUrl="mongodb+srv://Elva:Milomorita1995@cluster0.fuu1frn.mongodb.net/proyect";

function conectUrl() {
    return new Promise((res, rej) => { 
        mongoose
            .connect(mongooseUrl)
            .then(() => {
                console.log("Conexión a la base de datos establecida correctamente");
                res();
            })
            .catch((err) => {
                console.error("Error al conectar la base de datos ", err);
                rej(err);
            });
    });
}
module.exports = conectUrl
    
    