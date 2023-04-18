const mongoose = require("mongoose");



const {Schema , model} = mongoose;


const contactSchema = new Schema({
    name:{type:String , require : true},
    email:{type:String , unique:true},
    phone : String 
})

module.exports = Contact = model("Contacts" , contactSchema)