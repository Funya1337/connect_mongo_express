const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema({
    name: String,
    lastname: String,
    age: Number
});

module.exports = mongoose.model('Test', TestSchema);