const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const modelCadastroAvalia = connection.define(
    'tbl_cadastro_avalia',
    {
        cod_cadastro_avalia:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        produto:{
            type:Sequelize.STRING(60),
            allowNull:true
        },
        marca:{
            type:Sequelize.STRING(60),
            allowNull:true
        },
        ean:{
            type:Sequelize.STRING(13),
            allowNull:true,
            unique: true
        },
        utilizacaoCorreta:{
            type:Sequelize.STRING(250),
            allowNull:true
        },
        usoPessoal:{
            type:Sequelize.STRING(250),
            allowNull:true
        },
        dica:{
            type:Sequelize.STRING(250),
            allowNull:true
        }
    }
);

// modelCadastroAvalia.sync({force:true});

module.exports = modelCadastroAvalia;