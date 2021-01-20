const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3003;
const path = require('path');

const Locations = require('../database/Locations.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  res.status(200).send('Server Firing');
});

app.get('/listing/all', (req, res) => {
  console.log('get all listings');
  const query = Locations.where();
  query.find()
    .then( (records) => {
      if(records) {
        //TODO empty check?
        res.send(records);
      }
    })
    .catch( (err) => {
      res.status(500).send('Error fetching listings from database: ', err);
    });
});


//TODO - make a param, for testing Dosh, we are just doing one for pictures
app.get('/listing/:listingId', (req, res) => {
  console.log('get specified listing: ', req.params.listingId);
  const query = Locations.where({_id: req.params.listingId});
  query.findOne((err, record) => {
    if(err) {
      console.log('error retrieving record: ', err);
      res.status(500).send('Error fetching listing from database: ', err);
    } else if (record) {
      res.send(record);
    }
    //TODO add 404 if query succeeds but record is empty
  })
});

app.listen(PORT, () => {console.log('App listening on port: ', PORT)});
