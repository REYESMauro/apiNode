'use strict';

import mongoose from 'mongoose';
import app from './app.js';


const PORT = 4000

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/motos')
    .then(() => {
        console.log('conexion a la base de datos exitosa');

        app.listen(PORT, () => {
            console.log("hola reyes funciona perfecto") 
        })
    })
    .catch(err => console.log(err.message));
