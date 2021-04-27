const express = require('express');
const app = express();
const userRoute = express.Router();

// User model
let User = require('../models/User');

// Create user Accountv bv  
userRoute.route('/').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  })
});

module.exports = userRoute;