const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) console.error(err);
  });
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});

describe('Product router responds correctly to valid requests', () => {
  it('Creates a product in response to POST "/"', async () => {
    const product = {
      name: 'Cheese',
      description: 'Favoured by Wallace and Gromit',
      price: 1.55,
    };

    const res = await request(app)
      .post('/api/products/')
      .send(product)
      .set('Accept', 'application/json');

    if (res.status === 400) {
      console.log(res.body);
    }

    expect(res.status).toEqual(200);
  });
});
