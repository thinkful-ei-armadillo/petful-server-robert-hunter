'use strict';
const cats = require('./cats.js');
const CatService = {
  getCat() {
    return cats;
  }
};

module.exports = CatService;
