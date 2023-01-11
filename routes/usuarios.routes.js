const { Router } = require('express');
const { 
    usuariosGet,
    usuariosPost
    ,usuariosPut,
    usuariosPacht,
    usuariosDelete } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPacht);

router.delete('/', usuariosDelete);




module.exports = router;