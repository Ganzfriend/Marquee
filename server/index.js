const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  res.status(200).send('Server Firing');
});

app.listen(PORT, () => {console.log('App listening on port: ', PORT)});
