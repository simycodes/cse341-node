// IMPORTING PACKAGES-DEPENDENCIES
const express = require('express');
// CREATING-DEFINING THE MAIN APP ROUTER VARIABLE
const router = express.Router();

// LINKING ALL DIFFERENT APP ROUTES TO SINGLE MAIN ROUTE
const contactRouter = require('./contacts.js');
const homeRouter = require('./home.js');

router.use('/', homeRouter);
router.use('/contacts', contactRouter);

// The app. use() method mounts or puts the specified middleware functions at the specified
// path. This middleware function will be executed only when the base of the requested path
// matches the defined path.

module.exports = router;
