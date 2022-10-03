const mongoose = require('mongoose')

const jordan1Schema = new mongoose.Schema({
    colorWay: {type: String, required: true},
    price: {type: String, required: true},
    //picture 
    isDeadStock: Boolean
})

const jordan1 = mongoose.model('jordan1', jordan1Schema)
module.exports = jordan1