const mongoose = require("mongoose");

function connectDB(uri) {
    mongoose.connect(uri)
        .catch((error) => {
            console.log(`MongoDB failed to connect...`);
        });

    mongoose.connection.on("error", (error) => {
        console.log(error);
    });
}

module.exports = connectDB;
