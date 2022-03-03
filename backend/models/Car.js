const mongoose = require("mongoose")

const schema = mongoose.Schema({
	sku: String,
	model: String,
	name: String,
    price: Number,

})

module.exports = mongoose.model("Car", schema)