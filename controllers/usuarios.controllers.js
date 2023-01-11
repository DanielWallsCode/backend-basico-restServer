const {response,request} = require('express')


const usuariosGet = (req = request,res = response) =>{

    const query = req.query;

    res.status(200).json({
        msg: 'get API - Controlador',
        query
    });
}

const usuariosPost = (req,res) =>{
    const {nombre,edad} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req,res) =>{

    const {id} = req.params;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPacht = (req,res) =>{
    res.json({
        msg: 'pacht API - Controlador'
    });
}

const usuariosDelete = (req,res) =>{
    res.json({
        msg: 'Delete API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPacht,
    usuariosDelete,

}