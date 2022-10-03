const mongoose = require('mongoose')

const nikeXoffSchema = new mongoose.Schema({
    colorWay: {type: String, required: true},
    price: {type: String, required: true},
    isDeadStock: Boolean
})

const nikeXoff = mongoose.model('nikeXoff', nikeXoffSchema)
module.exports = nikeXoff