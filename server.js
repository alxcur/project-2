var express = require('express');
var connection = require('./config/connection');
var app = express();
var port = process.env.port || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

connection.connect(err => {
    if(err) throw err;
    console.log("Connected to database.");
})

app.get('/', (req, res) => {
    // Send homepage
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})