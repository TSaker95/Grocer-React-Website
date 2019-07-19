const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const Product = require('../models/product.model');

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) console.error(err);
  });
  await Product.insertMany([
    { name: 'Dummy', description: 'For babies', price: 3.23 },
    { name: 'Thiccend Cream', description: 'For pavlova', price: 1.99 },
  ]);
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});

describe('Product router responds correctly to valid requests', () => {
  it('Creates a product in response to POST "/"', async () => {
    const newProduct = {
      name: 'Cheese',
      description: 'Favoured by Wallace and Gromit',
      price: 1.55,
    };

    const res = await request(app)
      .post('/api/products/')
      .send(newProduct)
      .set('Accept', 'application/json');

    expect(res.status).toEqual(200);
    expect(res.body).toMatchObject(newProduct);
  });

  it('Returns all products in response to GET "/"', async () => {
    const allProducts = await Product.find();

    const res = await request(app)
      .get('/api/products');

    expect(res.status).toEqual(200);
    expect(JSON.stringify(res.body)).toEqual(JSON.stringify(allProducts));
  });

  it('Returns one product by id in response to GET "/:id"', async () => {
    const allProducts = await Product.find();
    const productID = allProducts[0]._id;
    const foundProduct = await Product.findById(productID);

    const res = await request(app)
      .get(`/api/products/${productID}`);

    expect(res.status).toEqual(200);
    expect(JSON.stringify(res.body)).toEqual(JSON.stringify(foundProduct));
  });
});
