// This file is the entry point for the yarn scripts. It imports the express app,
// connects to the database, and starts the server. This code is seperated out here
// because we don't want to start the server or connect to the database when testing.

const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

const { connection } = mongoose;
connection.once('open', () => {
  console.log('Successfully connected to MongoDB');

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
