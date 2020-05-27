const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: { type: String, required: true },
    producttypeId: { type: mongoose.Schema.Types.ObjectId, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    saleprice: { type: Number, required: true },
    image: [{ type: String, required: true }],
    color: [{ type: String, required: true }],
    size: [{ type: String, required: true }],
    ratingAverage: { type: Number, required: true },

});

module.exports = mongoose.model('Product', productSchema);