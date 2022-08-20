const mongoose = require('mongoose')

const StartSchema = new mongoose.Schema({
    start:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Start', StartSchema)