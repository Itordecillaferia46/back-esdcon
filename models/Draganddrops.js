const mongoose = require('mongoose')
const DraganddropSchema = new mongoose.Schema({
    enunciado: String,
    respuesta: String,
    retroalimentacion: String,
})
module.exports = mongoose.model('draganddrop', DraganddropSchema)