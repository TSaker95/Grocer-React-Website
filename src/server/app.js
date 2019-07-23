const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());

// Route definitions
app.use(express.static('dist'));

const productsRouter = require('./routes/products');
const specialsRouter = require('./routes/specials');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/api/products', productsRouter);
app.use('/api/specials', specialsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

// If no route matches, send the react app and let it deal with the request using react-router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

module.exports = app;
