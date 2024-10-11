const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const modelCategoria = connection.define(
    'tbl_categoria_nicho',
    {
        cod_categoria_nicho:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_categoria_nicho:{
            type:Sequelize.STRING(100),
            allowNull:true
        }
    }
);

modelCategoria.sync({force:true});

module.exports = modelCategoria;