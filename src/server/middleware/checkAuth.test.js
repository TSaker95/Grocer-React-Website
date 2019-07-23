const express = require('express');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const checkAuth = require('./checkAuth');
require('dotenv').config();

const app = express();

app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());

app.use(checkAuth);
app.get('/hello', (req, res) => {
  res.sendStatus(200);
});

const username = 'admin';
let validToken;

beforeAll(() => {
  const payload = { username };
  validToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '72h',
  });
});

describe('checkAuth middleware correctly proccesses requests with valid and invalid tokens', () => {
  it('Sends a 401 when no token is provided', async () => {
    const res = await request(app)
      .get('/hello');

    expect(res.status).toEqual(401);
  });

  it('Sends a 401 when a bad token is provided', async () => {
    const res = await request(app)
      .get('/hello')
      .set('Cookie', 'token=bad');

    expect(res.status).toEqual(401);
  });

  it('Sends a 200 when a valid token is provided as a cookie', async () => {
    const res = await request(app)
      .get('/hello')
      .set('Cookie', `token=${validToken}`);

    expect(res.status).toEqual(200);
  });
});
