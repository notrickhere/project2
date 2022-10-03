const mongoose = require('mongoose')

const jordan4Schema = new mongoose.Schema({
    colorWay: {type: String, required: true},
    price: {type: String, required: true},
    isDeadStock: Boolean
})

const jordan4 = mongoose.model('jordan4', jordan4Schema)
module.exports = jordan4