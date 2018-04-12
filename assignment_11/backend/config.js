const pg = require('pg');
const express = require('express');
const cors = require('cors');
const app = express();

const client = new pg.Client({
  database: 'inst_guide',
  user: 'sabbastian',
  password: 'cElEsTe27'
});

client.connect();

client.query(`SELECT * FROM instruments`, (err, result) => {
  app.get('/instruments', (req, res) => res.json(result));
});

client.query(`SELECT * FROM family`, (err, result) => {
  app.get('/family', (req, res) => res.json(result));
});

client.query(`SELECT * FROM class`, (err, result) => {
  app.get('/class', (req, res) => res.json(result));
});

client.query(`SELECT * FROM clef`, (err, result) => {
  app.get('/clef', (req, res) => res.json(result));
});

client.query(`SELECT * FROM techniques`, (err, result) => {
  app.get('/techniques', (req, res) => res.json(result));
});

client.query(`SELECT * FROM tech_mapping`, (err, result) => {
  app.get('/tech_mapping', (req, res) => res.json(result));
});

app.use(cors());

app.listen(3000, () => console.log('App listening on port 3000!'))
