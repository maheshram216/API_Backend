const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    customer_id: { type: String },
    customer_name: { type: String },
    email: { type: String},
    balance: { type: String }
});

const model = mongoose.model("Customer", CustomerSchema);

module.exports = model