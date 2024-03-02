const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        message: {
            type: String,
        }
    }
)

const formdata = mongoose.model('formdata', dataSchema);
formdata.createIndexes();
module.exports = formdata;