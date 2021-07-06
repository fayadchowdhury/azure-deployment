const express = require("express");
const router = express.Router();

const {
    getAllQuotes,
    createQuote
} = require("../controllers/quotesController");

router.get("/read", getAllQuotes);
router.post("/create", createQuote);

module.exports = router;