const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Book = new Schema({
   name: {
      type: String
   },
   author: {
      type: String
   },
   published_year: {
      type: Number
   },
   edition: {
      type: Number
   },
   issued_to_user_id: {
      type: String
   },
   issued_date: {
      type: Date
   },
   return_date: {
      type: Date
   }
}, {
   collection: 'book'
})

module.exports = mongoose.model('Book', Book)