const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
    price: [{ type: Number, required: true }],
    quantity: [{ type: Number, required: true }],
    size: [{ type: String, required: true }],
    color: [{ type: String, required: true }],
    totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);