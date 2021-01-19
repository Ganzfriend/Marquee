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

//TODO - make a param, for testing Dosh, we are just doing one for pictures
app.get('/listing/:listingId', (req, res) => {
  console.log('get specified listing: ', req.params.listingId);
  const query = Locations.where({title: 'Test'});
  query.findOne((err, record) => {
    if(err) {
      console.log('error retrieving record: ', err);
      res.status.send('Error fetching listing from database: ', err);
    } else if (record) {
      res.send(record);
    }
    //TODO add 404 if query succeeds but record is empty
  })
});

app.listen(PORT, () => {console.log('App listening on port: ', PORT)});
