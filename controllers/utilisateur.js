const { ObjectId } = require("bson");
const { Utilisateur } = require("../models/utilisateur");
const client = require('./../databases/connect')

const addUser = async (req, res) => {
    try {
        let user = new Utilisateur(req.body.nom, req.body.adresse, req.body.age);
        let result = await client.db().collection('users').insertOne(user);
        // res.status(300).render('./../views/userList');
    } catch (error) {
        console.log("Erreur : " + error);
    }
}

const getAllUser = async (req, res) => {
    try {
        let cursor = client.db().collection('user').find();
        let response = await cursor.toArray();
        res.status(300).render('./../views/userList',{
            data: response
        });
    } catch (error) {
        console.log("Erreur: " + error);
    }
}

const getUser = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let cursor = client.db().collection('user').find({_id: id});
        let response = await cursor.toArray();
        res.status(300).render('./../views/user', {
            data: response[0]
        })
    } catch (error) {
        console.log("Erreur : " + error);
    }
}

module.exports = { addUser, getAllUser, getUser };