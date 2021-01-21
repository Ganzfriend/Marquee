const Locations = require('./Locations.js');

var allListings = () => {
  return Locations.find();
};

var listingWithId = (searchId) => {
  const query = Locations.where({_id: searchId});
  return query.findOne();
}




exports.allListings = allListings;
exports.listingWithId = listingWithId;

