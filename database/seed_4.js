const db = require('mongoose');
const Locations = require('./Locations.js');
const seedObjs = require('./seed_objs.js');
const alec_seedObjs = require('./alec_seedObjs.js');

const pickMany = function (quantity, inList) {
  const retArr = [];
  for (let i = 0; i < quantity; i++) {
    const choice = Math.floor(Math.random() * inList.length);
    retArr.push(inList[choice]);
  }
  return retArr;
};

const pickOne = function (inList) {
  const choice = Math.floor(Math.random() * inList.length);
  return inList[choice];
};

const insertSamples_4 = function (numLocations) {
  const insertArray = [];
  for (let i = 0; i < numLocations; i++) {
    const tempLocation = {};

    tempLocation.id = i + 1;

    tempLocation.title = alec_seedObjs.titles[i];

    tempLocation.host = alec_seedObjs.hosts[i];

    tempLocation.location = alec_seedObjs.locations[i];

    tempLocation.rating = (Math.random() * 5).toFixed(2);

    tempLocation.pictures = pickMany(8, seedObjs.pictureBag);

    tempLocation.guests = Math.ceil(Math.random() * 10);

    tempLocation.bedrooms = pickMany(Math.ceil(Math.random() * 4), seedObjs.bedroomsBag);

    tempLocation.bathrooms = Math.ceil(Math.random() * 10);

    tempLocation.price = Math.ceil(Math.random() * 500);

    tempLocation.description = pickOne(seedObjs.descriptionBag);

    tempLocation.amenities = pickMany(6, seedObjs.amenitiesBag);

    insertArray.push(tempLocation);
  }

  Locations.create(insertArray)
    .then(() => {
      console.log('seed data stored in database');
      db.disconnect();
    });
};

exports.insertSamples_4 = insertSamples_4;

insertSamples_4(20);
