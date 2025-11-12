import express from 'express';
import productoRutas from './rutas/productoRuta.js';
import categoriaRutas from './rutas/categoriaRuta.js';

const app = express();
app.use(express.json());

app.use('/', productoRutas);
app.use('/', categoriaRutas);

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`);
});
