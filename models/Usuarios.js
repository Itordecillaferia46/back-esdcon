const mongoose = require('mongoose')
const UsuariosSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String,
})
module.exports = mongoose.model('usuario', UsuariosSchema)