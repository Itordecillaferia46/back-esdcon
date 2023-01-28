const mongoose = require('mongoose')
const ContenidosSchema = new mongoose.Schema({
    concepto: String,
    caracteristicas: String,
    sintaxis: String,
})
module.exports = mongoose.model('contenido', ContenidosSchema)