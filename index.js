const express = require('express');
const cors = require('cors');

const routerAvalie = require('./routes/routeAvalie.js');
const routerCadastroAvalia = require('./routes/routeCadastroAvalia.js');
const routerNicho = require('./routes/routeNicho.js');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/', routerAvalie);
app.use('/', routerCadastroAvalia);
app.use('/', routerNicho)

app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5000');
});
