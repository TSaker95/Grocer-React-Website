const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const User = require('../models/user.model');

// May require additional time to download MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

const username = 'admin';
let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
    (err) => {
      if (err) console.error(err);
    },
  );

  await User.create({ username: 'admin', password: 'password' });
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});

describe('Auth router responds correctly to requests', () => {
  it('Responds with a 401 when given a nonexistent username', async () => {
    const loginDetails = { username: 'Josh', password: 'password' };

    const res = await request(app)
      .post('/api/auth/login')
      .send(loginDetails)
      .set('Accept', 'application/json');

    // console.log(res);

    expect(res.status).toEqual(401);
  });

  it('Responds with a 401 when given an incorrect password', async () => {
    const loginDetails = { username: 'admin', password: 'incorrect' };

    const res = await request(app)
      .post('/api/auth/login')
      .send(loginDetails)
      .set('Accept', 'application/json');

    // console.log(res);

    expect(res.status).toEqual(401);
  });

  it('Responds with 200 and a cookie when given correct details', async () => {
    const loginDetails = { username: 'admin', password: 'password' };

    const res = await request(app)
      .post('/api/auth/login')
      .send(loginDetails)
      .set('Accept', 'application/json');

    expect(res.status).toEqual(200);
    expect(res.header['set-cookie']).toBeTruthy();
  });
});

// The GET /api/auth/check route is tested in other files.
