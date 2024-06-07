const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const MessageModel = require('./models/Messages')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/viewer");

app.post('/people_msg', (req, res) => {
    MessageModel.create(req.body)
    .then(Viewers => res.json(Viewers))
    .catch(err => res.json(err))
})

app.listen(3001,  () => {
    console.log("server is running :3001")
})