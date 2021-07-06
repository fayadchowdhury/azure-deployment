const QuoteModel = require("../models/quotes");

exports.getAllQuotes = async (req, res) => {
    try
    {
        const quotes = await QuoteModel.find();
        res.status(200).json({message: "Success", quotes});
    }
    catch (e)
    {
        console.log(e);
        res.status(500).json({message: "Internal server error: " + e.message});
    }
};

exports.createQuote = async (req, res) => {
  try
  {
      console.log(req.body);
      const { username, quote } = req.body;
      const newQuote = new QuoteModel({
          username,
          quote
      });
      await newQuote.save();
      res.status(200).json({message: "Success", newQuote});
  }
  catch (e)
  {
      console.log(e);
      res.status(500).json({message: "Internal server error: " + e.message});
  }
};