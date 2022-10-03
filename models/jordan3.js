const mongoose = require('mongoose')

const jordan3Schema = new mongoose.Schema({
    colorWay: {type: String, required: true},
    price: {type: String, required: true},
    isDeadStock: Boolean
})

const jordan3 = mongoose.model('jordan3', jordan3Schema)
module.exports = jordan3