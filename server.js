const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

// Sample GET route
app.get('/api/data', (req, res) => {
  res.send('Sending back to client');
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
