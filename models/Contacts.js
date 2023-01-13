const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    favoriteColor: {
        type: String,
        default: '',
    },
    birthday: {
        type: String,
        default: '',
    },
  },
  // SECOND OBJECT ARGUMENT THAT HOLDS TIME STAMPS
//   {
//     timestamps: true
//   }

);

module.exports = mongoose.model('Contacts', ContactsSchema);