// Express Setup //
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Knex Setup //
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];  
const knex = require('knex')(config);

app.get('/api/photos', (req, res) => {
  knex('photos').then(photos => {
      res.status(200).json({photos:photos});
    }).catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
