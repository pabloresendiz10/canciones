const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Cancion = new Schema({
    nombre: {
        type: String
    },
    artista: {
        type: String
    },
    compositor: {
        type: String
    },
    genero: {
        type: String
    },
    album: {
        type: String
    },
    fecha: {
        type: String
    }
},{
    collection: 'canciones'
})

module.exports = mongoose.model('Cancion', Cancion)