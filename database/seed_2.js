const db = require('./index.js');
const Locations = require('./Locations.js');

const sampleLocations_2 = [
  {
    title: 'Dry Ice Factory',
    host: 'Normal Person',
    location: 'Oakland, CA',
    rating: 3.1,
    pictures: ['exterior1','interior1','interior2','exterior2', 'interior3'],
    guests: 4,
    bedrooms: ['1 king bed', '1 queen bed'],
    bathrooms: 4,
    price: 200,
    description: 'Think of London, a small city. Dark, dark in the daytime \
    People sleep, sleep in the daytime If they want to, if they want to \
    Im checking them out Im checking them out Ive got it figured out Im the one thats got it figured out  Theres good points some bad points \
    It all works out Im just a little freaked out \
    I will find a city find myself a city to live in find a city find myself a city to live in \
    Down El Paso way things get pretty spread out people got no idea where in the world they are they go up north and come back south \
    still got no idea where in the world they are \
    Im checking them out Im checking them out \
    Ive got it figured out Im the one thats got it figured out \
    theres good points some bad points it all works out Im just a little freaked out \
    There are a lot of rich people in Birmingham A lot of ghosts in a lot of houses \
    Look over there! dry ice factory a good place to get some thinking done \
    I will find a city find myself a city to live in \
    Did I forget to mention, to forget mention Memphis? \
    Home of Elvis and the ancient Greeks Do I smell? I smell home cooking \
    Its only the river, its only the river',
    amenities: ['heat', 'AC']
    
  },
];

const insertSampleLocations_2 = function() {
  Locations.create(sampleLocations_2)
    .then( () => db.close());
};

insertSampleLocations_2();