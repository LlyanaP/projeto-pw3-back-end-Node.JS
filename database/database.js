const Sequelize = require('sequelize');

const connection = new Sequelize(
    'bd_princess',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        timezone: '-03:00'
    }
);

module.exports = connection;