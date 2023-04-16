const express = require('express');
const path = require('path');
const PORT = 3001;

const app = express();

const CLI = require('./lib/cli');

const cli = new CLI();

cli.run();

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Navigate to /logo.svg to see your logo')); 

app.get('/logo', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/logo.svg'))
);

app.listen(PORT);