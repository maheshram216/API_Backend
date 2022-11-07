const express = require("express");
const CustomerSch = require("../SchemaModels/CustomerSchmea")


const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
        const data = await CustomerSch.find();
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

routes.post('/customer', async (req, res) => {
    try {
        const data = await CustomerSch.create(req.body);
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