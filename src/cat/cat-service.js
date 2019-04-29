'use strict';
const cats = require('./cats.json.js');

const CatService = {
  getCat() {
    return cats;
  }
};

module.exports = CatService;
