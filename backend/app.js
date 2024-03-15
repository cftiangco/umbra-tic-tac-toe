const express = require('express')
const mongoose = require('mongoose');

const gameRoutes = require('./src/routes/game.route')
const config = require('./src/config/db.config')

const PORT = 8000
const app = express()

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: 'cftiangco',
  pass: 'Linux@1991v6',
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use(express.json());

app.use('/game', gameRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})