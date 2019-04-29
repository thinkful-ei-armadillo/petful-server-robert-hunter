'use strict';
const dogs = require('./dogs.js');
const DogService = {
  getDog() {
    return dogs;
  }
};

module.exports = DogService;
