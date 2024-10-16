const express = require('express');

const modelAvalie = require('../modelo/avalie.js');

const router = express.Router();

router.get('/Avalie', (req, res)=>{

    modelAvalie.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Emogi de Avaliação Aparece',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Houve um erro no avalia',
                errorObject:error
            }
        );
    });

});

module.exports = router;