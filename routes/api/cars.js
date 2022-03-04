const express = require('express');
const router = express.Router();
// const Car = require('./models/Car')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.suhzp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


router.get('/allcars', async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect()
        const db = client.db('dao-car');
        const collection = db.collection('cars');
        const allCars = await collection.find({}).toArray();
        res.send(allCars);
    } catch (err) {
        console.error(err)
    }
});

router.post('/addcar', async (req, res) => {
    const client = new MongoClient(uri);

    const {
        sku,
        model,
        name,
        price
    } = req.body;

    //save req.body to database

    try {
        await client.connect()

        const db = client.db('dao-car');
        const collection = db.collection('cars');
        const newCar = {
            sku,
            model,
            name,
            price
        }
        await collection.insertOne(newCar);
        res.send(newCar);

    } catch (error) {
        console.log(error)

    }

});


module.exports = router;
