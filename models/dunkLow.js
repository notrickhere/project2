const mongoose = require('mongoose')

const dunkLowSchema = new mongoose.Schema({
    colorWay: {type:String, required: true},
    price: {type:String, required: true},
    isDeadStock: Boolean
})

const dunkLow = mongoose.model('dunkLow', dunkLowSchema)
module.exports = dunkLow