const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  sex: {type: String, enum: ['male', 'female', 'other']},
  cart: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
}, {
  timestamps: true
})

module.exports = model('User', schema)
