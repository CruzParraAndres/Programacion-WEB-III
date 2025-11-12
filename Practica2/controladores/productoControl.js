import { obtProductos } from "../modelos/productoModelo.js";

export const muestraProductos = async (req, res) => {
    try {
        const resultado = await obtProductos();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 6
import { insertarProducto } from "../modelos/productoModelo.js";

export const registrarProducto = async (req, res) => {
    try {
        const { nombre, precio, stock, categoria_id } = req.body;

        const resultado = await insertarProducto(nombre, precio, stock, categoria_id);

        res.status(201).json({
            mensaje: "Producto registrado correctamente",
            id: resultado.insertId
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 8
import { obtProductoPorId } from "../modelos/productoModelo.js";

export const muestraProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await obtProductoPorId(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 9
import { actualizarProducto } from "../modelos/productoModelo.js";

export const modificarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, stock, categoria_id } = req.body;

        const resultado = await actualizarProducto(id, nombre, precio, stock, categoria_id);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json({ mensaje: "Producto actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 10
import { modificarStock } from "../modelos/productoModelo.js";

export const actualizarStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad } = req.body;

        if (typeof cantidad !== 'number') {
            return res.status(400).json({ mensaje: "La cantidad debe ser un número" });
        }

        const resultado = await modificarStock(id, cantidad);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json({ mensaje: "Stock actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

