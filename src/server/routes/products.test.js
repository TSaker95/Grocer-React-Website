const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const Product = require('../models/product.model');

// May require additional time to download MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

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

  it('Updates a product in response to PUT "/:id"', async () => {
    let testProduct = await Product.create({
      name: 'Carpe Diem',
      description: 'Sieze the day!',
      price: 2000,
    });

    const newDetails = {
      name: 'Veni, vidi, vici',
      price: 123,
      description: 'I came, I saw, I conquered',
    };

    const res = await request(app)
      .put(`/api/products/${testProduct._id}`)
      .send(newDetails)
      .set('Accept', 'application/json');

    // The product in memory doesn't update, so we get the product from the DB again.
    testProduct = await Product.findById(testProduct._id);

    expect(res.status).toEqual(200);
    expect(testProduct.name).toEqual('Veni, vidi, vici');
    expect(testProduct.price).toEqual(123);
    expect(testProduct.description).toEqual('I came, I saw, I conquered');
  });

  it('Doesn\'t update details that aren\'t included in PUT "/:id"', async () => {
    let testProduct = await Product.create({
      name: 'Carpe Diem',
      description: 'Sieze the day!',
      price: 2000,
    });

    const newDetails = {};

    const res = await request(app)
      .put(`/api/products/${testProduct._id}`)
      .send(newDetails)
      .set('Accept', 'application/json');

    // The product in memory doesn't update, so we get the product from the DB again.
    testProduct = await Product.findById(testProduct._id);

    expect(res.status).toEqual(200);
    expect(testProduct.name).toEqual('Carpe Diem');
    expect(testProduct.price).toEqual(2000);
    expect(testProduct.description).toEqual('Sieze the day!');
  });

  it('Deletes a product in response to DELETE "/:id"', async () => {
    const testProduct = await Product.create({
      name: 'Delete Me',
      description: 'Not long for this world.',
      price: 11,
    });

    const productCountBeforeDelete = await Product.countDocuments();

    const res = await request(app)
      .delete(`/api/products/${testProduct._id}`);

    const productCountAfterDelete = await Product.countDocuments();

    expect(res.status).toEqual(200);
    expect(productCountBeforeDelete).toBeCloseTo(productCountAfterDelete + 1);
  });
});
