// This file sets up the Express app, which powers the backend. It is the best place to start
// reading if one wishes to understand the way the backend is set up and routed.

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
app.use(express.static('dist'));

// Route definitions
const productsRouter = require('./routes/products');
const specialsRouter = require('./routes/specials');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/api/products', productsRouter);
app.use('/api/specials', specialsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

// If no API route matches, send the react app. It will handle the request with react-router.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

module.exports = app;
