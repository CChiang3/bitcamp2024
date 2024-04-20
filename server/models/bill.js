const mongoose = require("mongoose");

const billScheme = new mongoose.Schema({
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

const Bill = new mongoose.model('bill', billScheme);

module.exports = Bill;
