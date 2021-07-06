const mongoose = require("mongoose");

const Quotes = new mongoose.Schema({
    username: {
       type: String,
       required: true,
   },
   quote: {
       type: String,
       required: true
   }
});

const QuoteModel = mongoose.model("quote", Quotes);

module.exports = QuoteModel;