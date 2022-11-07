const express = require("express");
const ProductSh = require("../SchemaModels/ProductSchema")

const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
        const data = await ProductSh.find();
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

routes.post('/product', async (req, res) => {
    try {
        const data = await ProductSh.create(req.body);
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