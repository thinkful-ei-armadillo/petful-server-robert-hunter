'use strict';
const DogService = require('./dog-service');

const express = require('express');

const DogRouter = express.Router();

DogRouter.route('/').get((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(DogService.getDog());
});

module.exports = DogRouter;
