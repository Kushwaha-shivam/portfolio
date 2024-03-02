const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// creating connection to database
const connectToDb =
    mongoose.connect(process.env.MONGO_URL, {
        dbName: 'user'
    }).then(() => {
        console.log("Db is connected successfully");
    }).catch((err) => {
        console.error(err);
    })

module.exports = connectToDb;

// in this file a database named 'user' is created
// If we'll see in the mongodb compass then there is no such a database it's because when a database has no content until it will not seen  

