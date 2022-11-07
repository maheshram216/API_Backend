const express = require("express");
const orderSch = require("../SchemaModels/OrderSchema")

const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
        const data = await orderSch.find();
        res.json({
            status: "success",
            data
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            meassage: error.meassage
        });
    }
});

routes.post('/order', async (req, res) => {
    try {
        const data = await orderSch.create(req.body);
        res.json({
            status: "success",
            data
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            meassage: error.meassage
        });
    }
});




module.exports = routes;