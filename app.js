const express = require('express');
const app = express();

const mongoose = require('mongoose');
const myTestSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number
});
const TestPage = mongoose.model('TestPage', myTestSchema);
// const myTest1 = new MyTest({ name: 'Boris', lastname: 'Britva', age: 14 });
// myTest1.save();

mongoose.connect('mongodb://localhost/onemore');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.get('/api/testpage', async (req, res) => {
        const myRes = await TestPage.find();
        console.log(111, myRes);
        res.send(myRes);
    })
    
    app.listen(8080, function () {
        console.log('Example app listening on port 3000!');
    });
});
