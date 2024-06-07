const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    name:String,
    email:String,
    number: Number,
    message:String    
})

const  MessageModel = mongoose.model("Viewers", MessageSchema)
module.exports = MessageModel