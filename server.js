// IMPORTING PACKAGES-DEPENDENCIES (FOR THE SERVER) & OTHER APP FILES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // help sent post requests
const router = require('./routes/');
// CREATING THE SERVER APP VARIABLE
const app = express();

// IMPORTING THE .env FILE SO ITS VALUES CAN BE ACCESSED AND USED
require('dotenv').config();
// SETTING THE PORT 
const PORT = process.env.PORT || 3000;

// VALIDATING BY PARSING INCOMING DATA-JSON FROM APP THROUGH THE BODY IN REQUEST ARGUMENT
app.use(bodyParser.json())

// CONNECTING TO THE DATABASE
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));


// SERVER APP AND ROUTES CONNECTION
app.use('/', router);

// RUNNING THE SERVER
app.listen(PORT, console.log(`The server is running on port ${PORT}`))