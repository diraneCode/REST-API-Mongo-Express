const express = require('express');
const routerUser = require('./routes/utilisateur');
const { connection } = require('./databases/connect');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(__dirname + '/public/'))

app.set('view engine', 'ejs');

app.use('/api/', routerUser)

connection('mongodb://127.0.0.1:27017/');


app.listen(3000, () => {
    console.log("Sreveru lancé...");
})