const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const User = require('../models/user.model');

// May require additional time to download MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

const username = 'admin';
let validToken;
let mongoServer;

beforeAll(async () => {
  const payload = { username };
  validToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '72h',
  });

  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
    (err) => {
      if (err) console.error(err);
    },
  );
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});

describe('User router responds correctly to valid requests', () => {
  it('Creates a user in response to POST "/"', async () => {
    const newUser = {
      username: 'admin',
      password: 'password',
    };

    const res = await request(app)
      .post('/api/users/')
      .set('Cookie', `token=${validToken}`)
      .send(newUser)
      .set('Accept', 'application/json');

    const allUsers = await User.find();

    expect(res.status).toEqual(200);
    expect(res.body).toEqual('User registered: admin');
    expect(allUsers.length).toBeGreaterThan(0);
  });
});
