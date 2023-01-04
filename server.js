// IMPORTING PACKAGES-DEPENDENCIES (FOR THE SERVER) & OTHER APP FILES
const express = require('express');
const router = require('./routes');
// CREATING THE SERVER APP VARIABLE
const app = express();


// IMPORTING THE .env FILE SO ITS VALUES CAN BE ACCESSED AND USED
require('dotenv').config();
// SETTING THE PORT 
const PORT = process.env.PORT || 3000;


// SERVER APP AND ROUTES CONNECTION
app.use('/', router);
// RUNNING THE SERVER
app.listen(PORT, console.log(`The server is running on port ${PORT}`))