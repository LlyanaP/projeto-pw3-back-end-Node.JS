const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const modelAvalie = connection.define(
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

// modelAvalie.sync({force:true});

module.exports = modelAvalie;