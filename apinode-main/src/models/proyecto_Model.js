const mongoose = require('mongoose');

const proyectoSchema = mongoose.Schema({
    titulo:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    fecha:{
        type: String,
        required:true
    },
    tecnologias:{
        type: Array,
        required:true
    }, 
    etiquetas:{
        type: Array,
        required:true
    },
    imagenes:{
        type: Array,
        required:true
    },   
});

module.exports = mongoose.model('proyecto',proyectoSchema);