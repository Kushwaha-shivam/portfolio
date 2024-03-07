const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const { connectToDb } = require('./database/db_connection');

const port = process.env.PORT || 4000;
const app = express();
app.get("/", (req, res) => {
    res.json("Hello I'm from backend");
})
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/', require('./routes/test'));
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
