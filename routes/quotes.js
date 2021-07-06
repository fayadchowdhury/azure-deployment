const express = require("express");
const router = express.Router();

const {
    getAllQuotes,
    createQuote
} = require("../controllers/quotesController");

router.get("/", getAllQuotes);
router.post("/enter", createQuote);

module.exports = router;