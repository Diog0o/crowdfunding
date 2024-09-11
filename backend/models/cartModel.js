const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
      },
    ],
    created_at: { type: Date, default: Date.now },
  });
  
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;