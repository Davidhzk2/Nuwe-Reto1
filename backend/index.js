const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// connect with db 
const port = process.env.PORT || 3000;

app.listen(port, ()=>
    console.log("el servidor esta corriendo en el puerto: "+ port)
);

mongoose.connect("mongodb://127.0.0.1:27017/nuweReto1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log("Conexion a MongoDB: ON"))
.catch((error) => console.log("Error al conectar con Mongo"))