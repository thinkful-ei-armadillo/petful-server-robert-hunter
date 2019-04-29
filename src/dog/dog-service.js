'use strict';
const dogs = require('./dogs.json.js');
const DogService = {
  getDog() {
    return dogs;
  }
};

module.exports = DogService;
