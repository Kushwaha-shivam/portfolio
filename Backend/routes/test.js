const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json("Hello, Welcome to Backend World");
})

module.exports = router;