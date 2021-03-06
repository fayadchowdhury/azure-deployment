require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

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

const homeRoute = require("./routes/quotes");
app.use("/", homeRoute);

mongoose.connect(MONGO_URI, mongoOptions)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', async (req, res) => {
   try
   {
       const quotesData = await axios.get('http://20.193.247.26/read');
       res.render("index", {quotes: quotesData.data.quotes});
   }
   catch (e)
   {
       console.log(e.message);
       res.send("<h1>ERROR</h1>");
   }
});

app.get('/enter', (req, res) => {
    res.render("enter-quote");
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
