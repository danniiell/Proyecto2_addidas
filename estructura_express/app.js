const express = require('express');
const errores = require('http-errors');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const requestsrouter = require('./routes/test');
// const bodyParser = require('body-parser');


const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true                 
}));


// Logging y analizar
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Montar router
app.use('/test', requestsrouter);

// Estáticos (si los usas)
app.use(express.static(path.join(__dirname, 'public')));
['imagenes', 'videos', 'audios'].forEach(carp => {
  app.use(`/${carp}`, express.static(`public/${carp}`));
});

// 404 + manejo de errores
app.use((req, res, next) => next(errores(404)));
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;


