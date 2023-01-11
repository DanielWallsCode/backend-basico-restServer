const express = require('express')
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //MIDDLEWARES
        this.middlewares();
        
        //RUTAS DE MI APLICACION
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //PARSEO Y LECTURA DEL BODY
        this.app.use(express.json());
        
        //Directorio Publico
        this.app.use(express.static('public'));
    }

    //ROUTES PARA DEFINIR LAS RUTAS
    //STATUS: PARAA PONER UN ESTATUS DESPUES DE RES SE PONE .STATUS(num de el estado)
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = Server;