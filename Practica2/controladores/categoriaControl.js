import { obtCategoria } from "../modelos/categoriaModelo.js";

export const muestraCategorias = async (req, res) => {
    try {
        const resultado = await obtCategoria();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 1: Controlador para insertar una nueva categoria
import { insertarCategoria } from "../modelos/categoriaModelo.js";
export const registrarCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const resultado = await insertarCategoria(nombre, descripcion);
        res.status(201).json({ mensaje: "Categoría registrada", id: resultado.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 3
import { obtCategoriaConProductos } from "../modelos/categoriaModelo.js";
export const muestraCategoriaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await obtCategoriaConProductos(id);

        if (!resultado) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 4
import { actualizarCategoria } from "../modelos/categoriaModelo.js";

export const modificarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const resultado = await actualizarCategoria(id, nombre, descripcion);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json({ mensaje: "Categoría actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Ejercicio 5
import { eliminarCategoria } from "../modelos/categoriaModelo.js";

export const borrarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await eliminarCategoria(id);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json({ mensaje: "Categoría y productos asociados eliminados" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

