// Obtener todos los productos
const ProductoGSMC = require('../models/productoGSMC'); // Asegúrate de que la ruta al modelo sea correcta

exports.getAllProducts = async(req, res) => {
    try {
        const productos = await ProductoGSMC.find();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// Obtener un producto por ID
exports.getProductById = async(req, res) => {
    try {
        const producto = await ProductoGSMC.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

// Crear un nuevo producto
exports.createProduct = async(req, res) => {
    try {
        const nuevoProducto = new ProductoGSMC(req.body);
        const producto = await nuevoProducto.save();
        res.status(201).json(producto);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

// Actualizar un producto existente
exports.updateProduct = async(req, res) => {
    try {
        const producto = await ProductoGSMC.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

// Eliminar un producto existente
exports.deleteProduct = async(req, res) => {
    try {
        const producto = await ProductoGSMC.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};