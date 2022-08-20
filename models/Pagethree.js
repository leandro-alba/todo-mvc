const mongoose = require('mongoose')

const PagethreeSchema = new mongoose.Schema({
    pagethree:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Pagethree', PagethreeSchema)