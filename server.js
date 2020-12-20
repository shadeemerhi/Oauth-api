require('dotenv').config();
const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static('public'));
// app.use(cors({ origin: true, credentials: true }));

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;

// Sample GET route
app.get('/api/data', (req, res) => {
  res.send('Sending back to client');
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});

app.get('/login/github', (req, res) => {
  console.log('hitting endpoint');
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:8080/login/github/callback`;
  res.redirect(url);
});

app.get('/login/github/callback', (req, res) => {
  res.send('idk what to do from here');
  res.redirect('http://localhost:3000');
})
