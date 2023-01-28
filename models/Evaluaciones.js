const mongoose = require('mongoose')
const EvaluacionSchema = new mongoose.Schema({
    enunciado: String,
    respuesta: String,
    nota_obtenida: Number,
    tiempo : Number,
    numero_intentos : Number

})
module.exports = mongoose.model('evaluacion', EvaluacionSchema)