const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const modelCategoria = connection.define(
    'tbl_avalie',
    {
        cod_avalie:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_avalie:{
            type:Sequelize.STRING(100),
            allowNull:true
        }
    }
);

modelCategoria.sync({force:true});

module.exports = modelCategoria;