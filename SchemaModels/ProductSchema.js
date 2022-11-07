const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Product_id : {type: String},
    Product_type: {type: String},
    Product_name: {type: String},
    Product_price: {type: Number},
    Available_quantity: {type: Number}
});



const model = mongoose.model("Product", ProductSchema);

module.exports = model;