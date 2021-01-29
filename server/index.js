const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3004;
const path = require('path');

import { allListings, listingWithId} from '../database/queries.js';

var seeder = require('../database/seed_3.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/listing',express.static(path.join(__dirname, '..', 'dist')));
app.use('/listing/*',express.static(path.join(__dirname, '..', 'dist')));


app.get('/', (req, res) => {
  res.status(200).send('Server Firing');
});

app.get('/api/listing/all', (req, res) => {
  console.log('get all listings');
  allListings()
    .then( (records) => {
      if(records.length > 0) {
        res.send(records);
      } else {
        //no records to be had, send no content message
        res.status(204).send();
      }
    })
    .catch( (err) => {
      res.status(500).send('Error fetching listings from database: ', err);
    });
});

app.get('/api/listing/random', (req, res) => {
  console.log('get random listinge');
  allListings()
    .then( (records) => {
      if(records.length > 0) {
        var myRecord = records[Math.floor(Math.random() * records.length)];
        res.send(myRecord);
      } else {
        //no records to be had, send no content message
        res.status(204).send();
      }
    })
    .catch( (err) => {
      res.status(500).send('Error fetching listings from database: ', err);
    });
});


//TODO - make a param, for testing Dosh, we are just doing one for pictures
app.get('/api/listing/:listingId', (req, res) => {
  console.log('get specified listing: ', req.params.listingId);
  listingWithId(req.params.listingId)
    .then( (record) => {
      if(record) {
        res.send(record)
      } else {
        res.status(404).send('Cannot find listing with id: ', req.params.listingId);
      }
    })
    .catch( (err) => {
      res.status(500).send('Error fetching listing from database: ', err);
    })
});



app.listen(PORT, () => {console.log('App listening on port: ', PORT)});
