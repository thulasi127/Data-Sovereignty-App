process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const assert = require('assert');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('Testing routes for /post', () => {
  before((done) => {
    conn
      .connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });


  it('GET when db has no posts', (done) => {
    request(app)
      .get('/api/getPosts')
      .set('Accept', 'application/json')
      .set('Content-type', 'application/json')
      .then((res) => {
        const posts = res.body.posts;
        // console.log(posts);
        expect(posts.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });


  it('POST a company with their articles', (done) => {
    const mypost = {companyName: 'name', articles: ['article1', 'article2']};
    request(app)
      .post('/api/posts')
      .send(mypost)
      .set('Accept', 'application/json')
      .set('Content-type', 'application/json')
      .expect(201)
      .then((res) => {
        const post = res.body.post;
        assert.equal(post.companyName, mypost.companyName);
        done();
      })
      .catch((err) => done(err));
  });

  
  it('GET the company that was added', (done) => {
    const companyName = 'name';
    // reset db and manually put values in database
    request(app)
      .get(`/api/getPosts?companyName=${companyName}`)
      .set('Accept', 'application/json')
      .set('Content-type', 'application/json')
      .then((res) => {
        const posts = res.body.posts;
        expect(posts.length).to.equal(1);
        done();
      })
      .catch((err) => done(err));
  });
});
