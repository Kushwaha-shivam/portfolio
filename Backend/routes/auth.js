const express = require('express');
const formdata = require('../modals/Userdata');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// create user using this api --> /api/auth/

router.post('/', (req, res) => {

    // creating a user data
    const { name, email, message } = req.body;
    formdata.create({
        name,
        email,
        message,
    }).then((d) => {
        res.json(d)
    }).catch((error) => {
        console.log(error);
        res.json({ error: "Enter a valid email" })
    })
})

module.exports = router