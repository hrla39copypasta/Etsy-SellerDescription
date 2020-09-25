const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/static', express.static(path.join(__dirname, 'public')));

const PORT = 8004;
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
