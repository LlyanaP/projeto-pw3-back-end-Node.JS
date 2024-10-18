const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const modelCategoriaNicho = connection.define(
    'tbl_categoria_nicho',
    {
        cod_categoria_nicho:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_categoria_nicho:{
            type:Sequelize.STRING(60),
            allowNull:true,
            unique: true
        }
    }
);

// modelCategoriaNicho.sync({force:true});

module.exports = modelCategoriaNicho;