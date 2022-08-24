const express = require('express');

// Instancia
const app = express();

// Middlewares
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

//Motor de plantillas
app.set('views', './views');
app.set('view engine', 'pug');

//base de datos
const DB_PRODUCTOS = [];

// Rutas
app.get('/', (req, res)=>{
    res.render('vista', {DB_PRODUCTOS});
});

app.get('/cargados', (req, res)=>{
    res.render('cargados', {DB_PRODUCTOS});
});

app.post('/productos', (req, res)=>{
        DB_PRODUCTOS.push(req.body);
        console.log(DB_PRODUCTOS)
        res.redirect('/cargados');
});

//Servidor
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http:://localhost:${server.address().port}`)
});
server.on('error', err => console.log(`error en server ${err}`));
