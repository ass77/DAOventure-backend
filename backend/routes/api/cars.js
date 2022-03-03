const express = require('express');
const router = express.Router();
const Car = require("./models/Car") // new
const uuid = require('uuidv4');

router.get('/allCars', async (req, res) => {
    // const cars = await Car.find();
    res.send('List of car');
});

router.post('/addCar', async (req, res) => {

    // const car = new Car({
    //     id: uuid(),
    //     sku: req.body.sku,
	// 	price: req.body.price,
	// 	model: req.body.model,
    //     name: req.body.name,
	// })


	// await post.save()

    res.send(`Add new car with SKU: ${uuid()}`);
})

module.exports = router;
