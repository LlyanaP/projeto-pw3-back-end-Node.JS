const express = require('express');

const modelNicho = require('../modelo/nicho.js');

const router = express.Router();

router.get('/listagemDeNicho', (req, res)=>{

    modelNicho.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Nicho Listado',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'ERRO',
                errorObject:error
            }
        );
    });

});

module.exports = router;