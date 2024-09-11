// server.js o app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productoGSMCRoutes = require('./src/routes/productoGSMCRoutes');
const mongoose = require('./src/config/database');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Middleware para habilitar CORS
app.use(cors());

// Rutas de la API
app.use('/productosGSMC', productoGSMCRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal.');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});