import express from 'express';
import { registrarCategoria, muestraCategorias } from "../controladores/categoriaControl.js";
import { muestraCategoriaPorId } from "../controladores/categoriaControl.js";
const rutas = express.Router();

// Ejercicio 1: POST /categorias
rutas.post('/categorias', registrarCategoria);

// Ejercicio 2 : GET /categorias
rutas.get('/categorias', muestraCategorias);

// Ejercicio 3: GET /categorias/:id
rutas.get('/categorias/:id', muestraCategoriaPorId);
export default rutas;
// Ejercicio 4: PUT /categorias/:id
import { modificarCategoria } from "../controladores/categoriaControl.js";
rutas.put('/categorias/:id', modificarCategoria);
//Ejercicio 5: DELETE /categorias/:id
import { borrarCategoria } from "../controladores/categoriaControl.js";
rutas.delete('/categorias/:id', borrarCategoria);
