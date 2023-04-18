const express =require('express');
require("dotenv").config({path:"./config/.env"});
const conectDB = require('./config/conectDB.js')
const app = express();

app.use(express.json())

app.use("/api/contact", require("./routes/contact"))

conectDB();

const PORT = process.env.PORT || 6000 ; 


app.listen(PORT , (err)=>
err ? console.log(err)  : console.log(`server is running in port ${PORT}`) );