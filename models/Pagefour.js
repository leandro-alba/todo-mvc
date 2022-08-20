const mongoose = require('mongoose')

const PagefourSchema = new mongoose.Schema({
    pagefour:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Pagefour', PagefourSchema)