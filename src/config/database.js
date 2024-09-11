const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/DBG7', {

    })
    .then(() => console.log('Conectado a MongoDB!'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));