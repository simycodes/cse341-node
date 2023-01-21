// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');

// CREATING-DEFINING THE ROUTER VARIABLE
const contactRouter = express.Router();

const {
  displaySingleContact,
  displayAllContacts,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts.js');

// GET AS SINGLE CONTACT
contactRouter.get('/displaySingleContact/:id', displaySingleContact);

// GET ALL CONTACTS
contactRouter.get('/displayAllContacts', displayAllContacts);

// CREATE A CONTACT
contactRouter.post('/createContact', createContact);

// UPDATE A CONTACT
contactRouter.put('/updateContact/:id', updateContact);

// DELETE A CONTACT
contactRouter.delete('/deleteContact/:id', deleteContact);

module.exports = contactRouter;
