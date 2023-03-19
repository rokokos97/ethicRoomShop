const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    enum: ['s', 'm', 'l', 'oversize', 'onesize'],
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
  },
  composition: {
    type: Array,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  allGoods: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = model('Item', schema);
