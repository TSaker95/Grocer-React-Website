const request = require('supertest');
const app = require('./app');

// This test suite requires a built frontend for the router to send.
// If it fails, run yarn build and try again.
describe('App router sends react app to non-api routes', () => {
  it('Sends react app in response to GET /dashboard', async () => {
    const res = await request(app)
      .get('/dashboard');

    expect(res.status).toEqual(200);
  });
});
