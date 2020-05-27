const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    value: { type: Number, required: true },
});

module.exports = mongoose.model('Rating', ratingSchema);