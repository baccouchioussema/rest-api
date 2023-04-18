const mongosse = require("mongoose");

const conectDB = async()=>{
    try {
     await mongosse.connect(process.env.Mongo_URI)
    console.log("Database conected ....")
 } catch (error){
    console.log(err)
 }
}


module.exports = conectDB;