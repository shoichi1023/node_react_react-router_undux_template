import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

var expect = chai.expect;
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {

  it('it should GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should handle 404 error', (done) => {
    chai.request(app)
      .get('/notExist')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

});
