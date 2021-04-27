const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
   first_name: {
      type: String
   },
   last_name: {
      type: String
   },
   user_name: {
      type: String
   },
   password: {
      type: String
   },
   email: {
      type: String
   }
}, {
   collection: 'user'
})

module.exports = mongoose.model('User', User)