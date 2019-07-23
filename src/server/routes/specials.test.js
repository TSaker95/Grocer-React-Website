const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const Special = require('../models/special.model');

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

  await Special.insertMany([
    {
      productId: 'zyx', startDate: '2010-01-02', endDate: '2010-01-03', salePrice: 1,
    },
    {
      productId: 'wvu', startDate: '2011-01-02', endDate: '2011-01-03', salePrice: 55,
    },
  ]);
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});

describe('Special router responds correctly to valid requests', () => {
  it('Returns all specials in response to GET "/"', async () => {
    const allSpecials = await Special.find();

    const res = await request(app)
      .get('/api/specials');

    expect(res.status).toEqual(200);
    expect(JSON.stringify(res.body)).toEqual(JSON.stringify(allSpecials));
  });

  it('Returns one special by id in response to GET "/:id"', async () => {
    const allSpecials = await Special.find();
    const specialID = allSpecials[0]._id;
    const foundSpecial = await Special.findById(specialID);

    const res = await request(app)
      .get(`/api/specials/${specialID}`);

    expect(res.status).toEqual(200);
    expect(JSON.stringify(res.body)).toEqual(JSON.stringify(foundSpecial));
  });

  it('Creates a special in response to POST "/"', async () => {
    const newSpecial = {
      productId: 'abc',
      startDate: '2012-01-02',
      endDate: '2012-01-03',
      salePrice: 42,
    };

    const res = await request(app)
      .post('/api/specials/')
      .set('Cookie', `token=${validToken}`)
      .send(newSpecial)
      .set('Accept', 'application/json');

    expect(res.status).toEqual(200);
    expect(res.body.productId).toEqual(newSpecial.productId);
    expect(res.body.salePrice).toEqual(newSpecial.salePrice);
  });

  it('Updates a special in response to PUT "/:id"', async () => {
    let testSpecial = await Special.create({
      productId: 'abc',
      startDate: '2012-01-02',
      endDate: '2012-01-03',
      salePrice: 1,
    });

    const newDetails = {
      productId: 'def',
      startDate: '2013-01-02',
      endDate: '2013-01-03',
      salePrice: 2,
    };

    const res = await request(app)
      .put(`/api/specials/${testSpecial._id}`)
      .set('Cookie', `token=${validToken}`)
      .send(newDetails)
      .set('Accept', 'application/json');

    // The special in memory doesn't update, so we get it from the DB again.
    testSpecial = await Special.findById(testSpecial._id);

    expect(res.status).toEqual(200);
    expect(testSpecial.productId).toEqual('def');
    expect(testSpecial.salePrice).toEqual(2);
  });

  it('Doesn\'t update details that aren\'t included in PUT "/:id"', async () => {
    let testSpecial = await Special.create({
      productId: 'abc',
      startDate: '2012-01-02',
      endDate: '2012-01-03',
      salePrice: 1,
    });

    const newDetails = {};

    const res = await request(app)
      .put(`/api/specials/${testSpecial._id}`)
      .set('Cookie', `token=${validToken}`)
      .send(newDetails)
      .set('Accept', 'application/json');

    // The special in memory doesn't update, so we get it from the DB again.
    testSpecial = await Special.findById(testSpecial._id);

    expect(res.status).toEqual(200);
    expect(testSpecial.productId).toEqual('abc');
    expect(testSpecial.salePrice).toEqual(1);
  });

  it('Deletes a special in response to DELETE "/:id"', async () => {
    const testSpecial = await Special.create({
      productId: 'abc',
      startDate: '2012-01-02',
      endDate: '2012-01-03',
    });

    const specialCountBeforeDelete = await Special.countDocuments();

    const res = await request(app)
      .delete(`/api/specials/${testSpecial._id}`)
      .set('Cookie', `token=${validToken}`);

    const specialCountAfterDelete = await Special.countDocuments();

    expect(res.status).toEqual(200);
    expect(specialCountBeforeDelete).toBeCloseTo(specialCountAfterDelete + 1);
  });
});
