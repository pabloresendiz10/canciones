const express = require('express')
const cancionRutas = express.Router()

//declaramos un objeto de nuestro modelo
let Cancion = require('../models/Cancion')

//agregar una canción nueva
cancionRutas.route('/agregar').post((req,res) => {
    Cancion.create(req.body)
    .then((data) =>{
        console.log('Se insertó correctamente la canción')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//obtenemos todas las canciones
cancionRutas.route('/canciones').get((req,res) => {
    Cancion.find()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//obtenemos una sola canción por su ID
cancionRutas.route('/cancion/:id').get((req,res) => {
    Cancion.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//actualizar una canción
cancionRutas.route('/actualizar/:id').put((req,res) => {
    Cancion.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) => {
        console.log('Se actualizó correctamente la canción')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//eliminar una canción
cancionRutas.route('/eliminar/:id').delete((req,res) => {
    Cancion.findByIdAndDelete(req.params.id)
    .then((data) => {
        console.log('Se eliminó la canción correctamente')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

module.exports = cancionRutas;