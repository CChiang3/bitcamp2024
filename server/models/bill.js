const mongoose = require("mongoose");

const billScheme = new mongoose.Schema({
    uniquifier: {
        type: String,
        required: true,
        unique: true
    },
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
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Bill = new mongoose.model('bill', billScheme);

module.exports = Bill;
