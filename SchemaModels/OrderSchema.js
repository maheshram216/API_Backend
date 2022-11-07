const mongoose = require("mongoose");

const OrderSchema =new mongoose.Schema({
    customer_id : {type:String},
    Product_id : {type: String},
    Product_name: {type: String},
    quantity: {type: String}
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel