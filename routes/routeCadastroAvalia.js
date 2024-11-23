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
    let {produto, marca, ean, utilizacaoCorreta, usoPessoal, dica, cod_categoria_nicho, cod_avalie} = req.body;

    modelCadastroAvalie.create(
        {
            produto,
            marca,
            ean,
            cod_categoria_nicho,
            utilizacaoCorreta,
            usoPessoal,
            dica,
            cod_avalie
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

router.get('/detalheList/:cod_cadastro_avalia', (req, res)=>{

    let { cod_cadastro_avalia } = req.params;

    modelCadastroAvalie.findByPk(cod_cadastro_avalia)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'Produto Acessado com sucesso',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'Ocorreu um Erro Ao Acessar o Produto',
                errorObject:error
            }
        );
    });
});