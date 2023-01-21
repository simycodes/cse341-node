/* eslint-disable prettier/prettier */
// THIS IS A CONTROLLER FILE
// GET THE CONTACTS MODEL
const Contacts = require('../models/Contacts.js');

// GET AS SINGLE CONTACT
const displaySingleContact = async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET ALL CONTACTS
const displayAllContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// CREATE A CONTACT
const createContact = async (req, res) => {
  // Create a new Contact
  const newContact = new Contacts(req.body);
  try {
    // Save the new category
    const category = await newContact.save();
    res.status(201).json(category);
  } 
  catch (err) {
    res.status(500).json(err.message);
  }
};

// UPDATE A CONTACT
const updateContact = async(req, res) => {
  console.log("update contact working");
  // update a new Contact
  try {
    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, {$set: req.body,
    },{ new: true });
    res.status(204).json(updatedContact);
  } 
  catch (err) {
      res.status(500).json('Failed to update the contact.Try again later')
  }
};

const deleteContact = async (req, res) => {
  // delete a Contact
  console.log("Delete contact working");
  try {
    await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json('The contact has been deleted');
  } 
  catch (err) {
      res.status(500).json('Failed to delete the post.Try again later')
  }
};

module.exports = { 
  displaySingleContact,
  displayAllContacts,
  createContact,
  updateContact,
  deleteContact 
};
