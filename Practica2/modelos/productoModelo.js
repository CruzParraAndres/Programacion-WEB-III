import {db} from '../config/db.js';
export const obtProductos = async () => {
    const [resultado] = await db.query("SELECT * FROM productos");
    return resultado;
};
//Ejercicio 6
export const insertarProducto = async (nombre, precio, stock, categoria_id) => {
    const sql = `
        INSERT INTO productos (nombre, precio, stock, categoria_id)
        VALUES (?, ?, ?, ?)
    `;
    const [resultado] = await db.query(sql, [nombre, precio, stock, categoria_id]);
    return resultado;
};
//Ejercicio 8
export const obtProductoPorId = async (idProducto) => {
    const sql = `
        SELECT p.*, c.nombre AS nombre_categoria
        FROM productos p
        JOIN categorias c ON p.categoria_id = c.idCategoria
        WHERE p.idProducto = ?
    `;
    const [resultado] = await db.query(sql, [idProducto]);
    return resultado[0]; // devuelve un solo objeto
};
//Ejercicio 9
export const actualizarProducto = async (idProducto, nombre, precio, stock, categoria_id) => {
    const sql = `
        UPDATE productos
        SET nombre = ?, precio = ?, stock = ?, categoria_id = ?
        WHERE idProducto = ?
    `;
    const [resultado] = await db.query(sql, [nombre, precio, stock, categoria_id, idProducto]);
    return resultado;
};
//Ejercicio 10
export const modificarStock = async (idProducto, cantidad) => {
    const sql = `
        UPDATE productos
        SET stock = stock + ?
        WHERE idProducto = ?
    `;
    const [resultado] = await db.query(sql, [cantidad, idProducto]);
    return resultado;
};



