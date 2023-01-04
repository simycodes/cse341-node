// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');
const { displayName } = require('../controllers/');

// CREATING-DEFINING THE ROUTER VARIABLE 
const router = express.Router();

// CREATING ROUTES USING THE ROUTER VARIABLE
router.get('/', displayName);



module.exports = router;





