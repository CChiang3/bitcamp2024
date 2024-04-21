const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    bills: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "bill"
        }],
        require: true,
        default: []
    },
    friends: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "user"
        }],
        require: true,
        default: []
    },
    points: {
        type: Number,
        require: true,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
