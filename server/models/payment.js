const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    sourceName: {
        type: String
    },
    sourceURL: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number
    }
});

const Payment = new mongoose.model('payment', paymentSchema);

module.exports = Payment;
