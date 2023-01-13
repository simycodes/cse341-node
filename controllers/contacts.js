// THIS IS A CONTROLLER FILE

// GET THE CONTACTS MODEL
const Contacts = require("../models/Contacts.js");

// GET AS SINGLE CONTACT
const displaySingleContact = async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    res.status(200).json(contact);
  }
  catch (error) {
    res.status(500).json(error);
  }
}

// GET ALL CONTACTS
const displayAllContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
  }
  catch (error) {
    res.status(500).json(error);
  }
}

// CREATE A CONTACT
const createContact = async (req, res) => {
  // Create a new Contact
  const newContact = new Contacts(req.body);
  try {
     // Save the new category
    const category = await newContact.save();
    res.status(200).json(newContact);
  }
  catch (error) {
    res.status(500).json(error);
  }
}


module.exports = { displaySingleContact, displayAllContacts, createContact }