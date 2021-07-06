require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const { PORT, MONGO_URI } = process.env

const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
};

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(MONGO_URI, mongoOptions)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
   res.render("index", [{username: "Chink", quote: "To err is human"}]);
});

app.get('/enter', (req, res) => {
    res.render("enter-quote");
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
