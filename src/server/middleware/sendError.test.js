const express = require('express');
const request = require('supertest');
const sendError = require('./sendError');

const app = express();

app.get('/error', (_req, _res) => {
  throw new Error('Error');
});
app.get('/sendthenerror', (req, res) => {
  res.sendStatus(200);
  throw new Error('Error');
});

app.use(sendError);

describe('sendError middleware functions as expected', () => {
  it('Sends the error as the response when the error is thrown before response headers are sent', async () => {
    const res = await request(app)
      .get('/error');

    expect(res.status).toEqual(400);
  });

  it('Forwards error to Express\'s built-in error handler if headers are already sent', async () => {
    const res = await request(app)
      .get('/sendthenerror');

    expect(res.status).toEqual(200);
  });
});
