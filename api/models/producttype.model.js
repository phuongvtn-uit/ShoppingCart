const mongoose = require('mongoose');

const producttypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    typeid: { type: String, required: true },
    typeName: { type: String, required: true },
});

module.exports = mongoose.model('Producttype', producttypeSchema);