const mongoose = require('mongoose')
const ActividadesSchema = new mongoose.Schema({
    tipo_actividad: Array,
   
})
module.exports = mongoose.model('actividad0', ActividadesSchema)