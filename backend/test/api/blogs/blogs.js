process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const assert = require('assert');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('Testing routes for /blog', () => {
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


  it('GET when db has no blogs', (done) => {
    request(app)
      .get('/api/getBlogs')
      .then((res) => {
        const blogs = res.body.blogs;
        expect(blogs.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });


  it('POST a company with their blogs', (done) => {
    const myBlog = {companyName: 'name', blogs: ['blog1', 'blog2']};
    request(app)
      .post('/api/blogs')
      .send(myBlog)
      .set('Accept', 'application/json')
      .set('Content-type', 'application/json')
      .expect(201)
      .then((res) => {
        const blog = res.body.blog;
        assert.equal(blog.companyName, myBlog.companyName);
        done();
      })
      .catch((err) => done(err));
  });

});
