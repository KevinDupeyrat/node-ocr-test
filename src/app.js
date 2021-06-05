const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stuff = require('./data/stuff');
const mongoose = require('./config/db');
const stuffRoutes = require('./controller/controller')

app.set('port', process.env.PORT || '3000');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);

module.exports = app;