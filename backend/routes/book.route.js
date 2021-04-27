const express = require('express');
const app = express();
const bookRoute = express.Router();

// User model
let Book = require('../models/Book');

// Create user Accountv bv  
bookRoute.route('/').get((req, res, next) => {
  const { user_id } = req.query || {};
  const callBack = (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  };
  return user_id ? Book.find({ issued_to_user_id: user_id }, callBack) : Book.find({  }, callBack)
});

// Create user Accountv bv  
bookRoute.route('/').post((req, res, next) => {
  Book.updateOne({_id: req.body._id },req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  })
});

module.exports = bookRoute;