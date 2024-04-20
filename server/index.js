require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI)
    .catch((error) => {
        console.log(`MongoDB failed to connect...`);
    });

mongoose.connection.on("error", (error) => {
    console.log(error);
});

const apiRoutes = require("./routes/api");


const app = express();

// configure middleware
app.use(cors());
app.use(express.json());

// configure routes
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Starting server on port ${process.env.PORT}...`)
})
