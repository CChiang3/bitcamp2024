require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const auth = require("./config/auth");

const apiRoutes = require("./routes/api");

const app = express();

connectDB(process.env.DB_URI);

// configure middleware
app.use(cors());
app.use(express.json());

// configure routes
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Starting server on port ${process.env.PORT}...`)
})
