const mongoose = require('mongoose');

const StallSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  productName: {
    type: String,
  },
  buyingCost: {
    type: String,
  },
  sellingCost: {
    type: String,
  },
  unit_number: {
    type: Number,
  },
  type: {
    type: String,
    default: 'Investment',
  },
  costBuying: {
    type: String,
  },
  costReturn: {
    type: String,
  },
  count: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: 'Waiting',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('stalls', StallSchema);
