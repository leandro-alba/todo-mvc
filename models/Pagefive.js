const mongoose = require('mongoose')

const PagefiveSchema = new mongoose.Schema({
    pagefive:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Pagefive', PagefiveSchema)