const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  price: {type: Number, required: true},
  size: {type: String},
  description: {type: String},
  composition: {type: Array},
  allGoods: {type: Boolean}
}, {
  timestamps: true
})

module.exports = model('Item', schema)
