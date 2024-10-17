const express = require('express');

const modelCadastroAvalie = require('../modelo/cadastroAvaliação.js');

const router = express.Router();

module.exports = router;

router.get('/listagemDeProdutos',(req,res)=>{
    modelCadastroAvalie.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Avaliação de Produto Aparece',
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

router.post('/cadastroAvalie', (req,res)=> {
    let {produto, marca, ean, utilizacaoCorreta, usoPessoal, dica} = req.body;

    modelCadastroAvalie.create(
        {
            produto,
            marca,
            ean,
            utilizacaoCorreta,
            usoPessoal,
            dica
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus: 'Avaliação do Produto Cadastrada com Sucesso'
                    
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Falha no Cadastro da Avaliação',
                errorObject:error
            }
        );
    });
    
});
