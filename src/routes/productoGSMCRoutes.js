const express = require('express');
const router = express.Router();
const productoGSMCController = require('../controllers/productoGSMCController'); // Asegúrate de que la ruta sea correcta

// Definir las rutas
router.get('/', productoGSMCController.getAllProducts); // Asegúrate de que getAllProducts esté definido en el controlador
router.get('/:id', productoGSMCController.getProductById); // Asegúrate de que getProductById esté definido en el controlador
router.post('/', productoGSMCController.createProduct); // Asegúrate de que createProduct esté definido en el controlador
router.put('/:id', productoGSMCController.updateProduct); // Asegúrate de que updateProduct esté definido en el controlador
router.delete('/:id', productoGSMCController.deleteProduct); // Asegúrate de que deleteProduct esté definido en el controlador

module.exports = router;