const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>WSL Runner Pipeline Success!</h1><p>Status: Deployed Locally</p>');
});

module.exports = app;
