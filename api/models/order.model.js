const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cartId: {type: mongoose.Schema.Types.ObjectId, required: true },
    //userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    //productId: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
    //quantity: [{ type: Number, required: true }],
    //size: [{ type: String, required: true }],
    //color: [{ type: String, required: true }],
    //totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);