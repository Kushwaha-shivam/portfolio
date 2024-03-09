const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const { connectToDb } = require('./database/db_connection');
const formdata = require('../Backend/modals/Userdata.js')

const port = process.env.PORT || 4000;
const app = express();
app.use(cors({
    // origin: "https://portfolio-shivam-dev.vercel.app"
}));

app.use(bodyParser.json());

// apis to handle backend 
app.get("/", (req, res) => {
    res.json("Hello I'm from backend");
})

app.post('/contact', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    // creating a user data
    const { name, email, message } = req.body;
    formdata.create({
        name,
        email,
        message,
    }).then((data) => {
        res.json(data)
    }).catch((error) => {
        console.log(error);
        res.json({ error: "Enter a valid email" })
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
