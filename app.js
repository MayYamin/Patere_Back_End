const express = require('express');
const bodyParser = require('body-parser');

// import route
const product = require('./routes/product.route')
const user = require('./routes/user.route')
// initialize our express app
const app = express();

// set up mongoose connecion
const mongoose = require('mongoose');
let db_url = 'mongodb://localhost:27017/TestDB';
const mongodb = process.env.MONGODB_URI || db_url;
mongoose.connect(mongodb, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// config for CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route
app.use('/products', product);
app.use('/users', user);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});