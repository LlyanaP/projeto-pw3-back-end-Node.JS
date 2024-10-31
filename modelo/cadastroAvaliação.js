const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const modelAvalie = require('./avalie.js')

const modelCategoriaNicho = require('./nicho.js');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

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

modelAvalie.hasMany(modelCadastroAvalia,{
    foreignKey: 'cod_avalie',
    sourceKey: 'cod_avalie'
})

modelCadastroAvalia.belongsTo(modelAvalie,{
    foreignKey: 'cod_avalie',
    sourceKey: 'cod_avalie'
})

modelCategoriaNicho.hasMany(modelCadastroAvalia,{
    foreignKey: 'cod_categoria_nicho',
    sourceKey:'cod_categoria_nicho'
})

modelCadastroAvalia.belongsTo(modelCategoriaNicho,{
    foreignKey: 'cod_categoria_nicho',
    sourceKey: 'cod_categoria_nicho'
})



modelCadastroAvalia.sync({force:true});

module.exports = modelCadastroAvalia;