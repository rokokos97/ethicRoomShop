const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  description: {type: String},
  composition: {type: String},
  image: {type: String}
}, {
  timestamps: true
})

module.exports = model('Item', schema)
