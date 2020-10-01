const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbHelper = require('../db/dbHelpers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get seller Info
app.get('/api/seller/:id', (req, res) => {
  dbHelper.getSeller(req.params.id, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(result);
  });
});

app.get('/api/store/:id', (req, res) => {
  dbHelper.getSellerProducts(req.params.id, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(result);
  });
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));

const PORT = 8004;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
