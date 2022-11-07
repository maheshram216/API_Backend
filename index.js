const express = require("express");
const mongooes = require("mongoose");
const route = require("./routes/Proucts");
const Custroute = require("./routes/Customer");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api",route);
app.use("/api",Custroute);

mongooes.connect("mongodb://localhost/api_web_tech")
.then(()=>console.log("db connected"))
.catch((err)=>console.log("no connection"));

app.listen(PORT,()=>{console.log(`server connected to port ${PORT}`)});



