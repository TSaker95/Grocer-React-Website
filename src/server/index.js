const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// Connect to database
const { connection } = mongoose;
connection.once('open', () => {
  console.log('Successfully connected to MongoDB');

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
