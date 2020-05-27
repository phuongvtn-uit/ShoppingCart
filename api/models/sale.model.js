const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    amountSold: { type: Number, required: true },
});

module.exports = mongoose.model('Sale',saleSchema);