const express = require('express');
const proyectoSchema = require('../models/proyecto_Model');
const router = express.Router();

//Crear un proyecto
router.post('/proyecto', (req, res)=>{
    const proyecto = proyectoSchema(req.body);
    proyecto
        .save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

//Metodo para obtener todos los proyectos
router.get('/todos', (req, res)=>{
    proyectoSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

//Metodo para obtener un proyecto
router.get('/todos/:id', (req, res)=>{
    const {id} = req.params;
    proyectoSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


//Metodo para actualizar un proyecto
router.put('/todos/:id', (req, res)=>{
    const {id} = req.params;
    const {titulo, descripcion, fecha, tecnologias, etiquetas, imagenes} = req.body;
    proyectoSchema
        .updateOne({_id: id},{ $set: {titulo, descripcion, fecha, tecnologias, etiquetas, imagenes}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


//Metodo para eliminar un proyecto
router.delete('/todos/:id', (req, res)=>{
    const {id} = req.params;
    proyectoSchema
        .deleteOne({_id: id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

module.exports = router;