const mongoose = require('mongoose')

const PagetwoSchema = new mongoose.Schema({
    pagetwo:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Pagetwo', PagetwoSchema)