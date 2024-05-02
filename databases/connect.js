const { MongoClient, Db } = require("mongodb");

let client = null;

const connection = (url) => {
    if(client == null){
        client = new MongoClient(url);
        client.connect();
        console.log("Connexion à mongodb établie");
    }
}

const db = () => {
    return new Db(client, 'rest_api');
}

module.exports = { connection, db }