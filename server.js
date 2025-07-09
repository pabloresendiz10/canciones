const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const createError = require('http-errors');

//conexión con la BD
mongoose
    //.connect('mongodb://127.0.0.1:27017/canciones')
    .connect('mongodb+srv://humbertorvma22:I172131VR8sQAD7g@cluster0.tgafhsm.mongodb.net/canciones?retryWrites=true&w=majority&appName=Cluster0')
    .then((x) => {
        console.log(`Conectado exitosamente a la BD: "${x.connections[0].name}"`)
        
    })
    .catch((error) => {
        console.error('Error de conexión: ',error.reason)
    })

//configuración del servidor web
const cancionRutas = require('./routes/cancion.routes');


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors())

app.use('/api',cancionRutas)

//habilitamos el puerto
const port = process.env.PORT || 4000

const server = app.listen(port, () => {
    console.log('Servidor escuchando en el puerto : '+port)
})

//manejador de error 404
app.use((req,res,next) => {
    next(createError(404))
})

//manejador de errores
app.use(function(err,req,res,next) {
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})