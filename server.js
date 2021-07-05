require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { PORT, MONGO_URI } = process.env

const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
};

const app = express();

mongoose.connect(MONGO_URI, mongoOptions)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
   res.send("SUP?");
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
