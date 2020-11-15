const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  img: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  plan: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  phone: {
    type: Number,
  },
  status: {
    type: String,
    default: "Not Delivered",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("subscriptions", SubscriptionSchema);
