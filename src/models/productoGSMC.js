const mongoose = require('mongoose');

const productoGSMCSchema = new mongoose.Schema({
    nombreGSMC: { type: String, required: true },
    descripcionGSMC: { type: String, required: true },
    precio: { type: Number, required: true },
    // Otros campos según sea necesario
});

const ProductoGSMC = mongoose.model('ProductoGSMC', productoGSMCSchema);

module.exports = ProductoGSMC;