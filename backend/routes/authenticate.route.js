const express = require('express');
const app = express();
const authenticateRoute = express.Router();

// User model
let User = require('../models/User');

// Create user Account
authenticateRoute.route('/').post((req, res, next) => {
  const { user_name, password } = req.body || {};
  User.findOne({ user_name, password  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  })
});

module.exports = authenticateRoute;