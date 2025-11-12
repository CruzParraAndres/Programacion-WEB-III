import {db} from '../config/db.js';
export const obtCategoria = async () => {
    const [resultado] = await db.query("SELECT * FROM categorias");
    return resultado;
};
//Ejercicio 1: Insertar una nueva categoria
export const insertarCategoria = async (nombre, descripcion) => {
    const sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
    const [resultado] = await db.query(sql, [nombre, descripcion]);
    return resultado;
};
//Ejercicio 3
export const obtCategoriaConProductos = async (idCategoria) => {
    const sqlCategoria = "SELECT * FROM categorias WHERE idCategoria = ?";
    const sqlProductos = "SELECT * FROM productos WHERE categoria_id = ?";

    const [categoria] = await db.query(sqlCategoria, [idCategoria]);
    const [productos] = await db.query(sqlProductos, [idCategoria]);

    if (categoria.length === 0) return null;

    return {
        ...categoria[0],
        productos
    };
};
//Ejercicio 4
export const actualizarCategoria = async (idCategoria, nombre, descripcion) => {
    const sql = "UPDATE categorias SET nombre = ?, descripcion = ? WHERE idCategoria = ?";
    const [resultado] = await db.query(sql, [nombre, descripcion, idCategoria]);
    return resultado;
};
//Ejercicio 5
export const eliminarCategoria = async (idCategoria) => {
    const sql = "DELETE FROM categorias WHERE idCategoria = ?";
    const [resultado] = await db.query(sql, [idCategoria]);
    return resultado;
};
