// IMPORTING PACKAGES-DEPENDENCIES (FOR THE SERVER) & OTHER APP FILES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // help sent post requests
const router = require('./routes/');
// CREATING THE SERVER APP VARIABLE
const app = express();

// SETTING UP UI SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

// IMPORTING THE .env FILE SO ITS VALUES CAN BE ACCESSED AND USED
require('dotenv').config();
// SETTING THE PORT
const PORT = process.env.PORT || 3000;

// VALIDATING BY PARSING INCOMING DATA-JSON FROM APP THROUGH THE BODY IN REQUEST ARGUMENT
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// http://localhost:3000/api-docs/#/
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// CONNECTING TO THE DATABASE
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// SERVER APP AND ROUTES CONNECTION
app.use('/', router);

// RUNNING THE SERVER
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
