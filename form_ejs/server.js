
const express = require('express');
const path = require('path');

// Instancia
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Motor de Plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Base de datos
const DB_PRODUCTOS = [];

// Rutas
app.get('/', (req, res)=>{
    res.render('vista', {DB_PRODUCTOS});
});

app.get('/cargados', (req, res)=>{
    res.render('cargados', {DB_PRODUCTOS});
});

app.post('/productos', (req, res) => {
    DB_PRODUCTOS.push(req.body);
    console.log(req.body);
    
    res.redirect('/')
});

// Servidor
const PORT = 8083;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
