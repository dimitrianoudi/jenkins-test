var request = require('supertest'),
	app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});