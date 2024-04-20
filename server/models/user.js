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
    payments: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "payment"
        }],
        require: true
    },
    friends: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "user"
        }],
        require: true
    },
    points: {
        type: Number,
        require: true
    }
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
