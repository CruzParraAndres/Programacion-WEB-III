import express from 'express';
import { muestraProductos } from "../controladores/productoControl.js";

const rutas = express.Router();

// Ejercicio 7: GET /productos
rutas.get('/productos', muestraProductos);
// Ejercicio 6: POST /productos
import { registrarProducto } from "../controladores/productoControl.js";
rutas.post('/productos', registrarProducto);
// Ejercicio 8: GET /productos/:id
import { muestraProductoPorId } from "../controladores/productoControl.js";
rutas.get('/productos/:id', muestraProductoPorId);
// Ejercicio 9: PUT /productos/:id
import { modificarProducto } from "../controladores/productoControl.js";
rutas.put('/productos/:id', modificarProducto);
// Ejercicio 10: PATCH /productos/:id/stock
import { actualizarStock } from "../controladores/productoControl.js";
rutas.patch('/productos/:id/stock', actualizarStock);

export default rutas;