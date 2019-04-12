'use strict';

const DogService = {
  getDog() {
    let dog = {
      imageURL:
        'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    };
    return dog;
  }
};

module.exports = DogService;
