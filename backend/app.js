const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PostModel = require('./db/models/posts');
const BlogModel = require('./db/models/blogs');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.post('/api/posts', async (req, res) => {
  const articles = req.body.articles;
  const companyName = req.body.companyName;

  const post = new PostModel({
    _id: new mongoose.Types.ObjectId(),
    companyName: companyName,
    articles: articles,
  });

  try {
    await post.save().catch((e) => console.log(e));
    res.status(201).json({
      message: 'NICE',
      post: {id: post._id, companyName: companyName, articles: articles},
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Failed to save.'});
  }
});

app.get('/api/getPosts', async (req, res) => {
  const companyName = req.query.companyName;
  if (!companyName) {
    return res.status(200).json({posts: []});
  }
  
  try {
    const posts = await PostModel.find({companyName: companyName});
   
    res.status(200).json({
      posts: posts.map((post) => ({
        id: post.id,
        companyName: post.companyName,
        articles: post.articles,
      })),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Failed to fetch data.'});
  }
});

app.post('/api/blogs', async (req, res) => {
  const blogs = req.body.blogs;
  const companyName = req.body.companyName;

  const blog = new BlogModel({
    _id: new mongoose.Types.ObjectId(),
    companyName: companyName,
    blogs: blogs,
  });

  try {
    await blog.save().catch((e) => console.log(e));
    res.status(201).json({
      message: 'NICE',
      blog: {id: blog._id, companyName: companyName, blogs: blogs},
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Failed to save.'});
  }
});

app.get('/api/getBlogs', async (req, res) => {
  const companyName = req.query.companyName;
  if(!companyName){
    return res.status(200).json({blogs: []});
  }
  try {
    const recentBlog = [];
    const blogs = await BlogModel.find({companyName: companyName});
    console.log(companyName + " " + blogs.length);
    // get most recent blog
    if(blogs){
      recentBlog.push(blogs[blogs.length - 1]);
    }
      
    res.status(200).json({
      blogs: recentBlog.map((blog) => ({
        id: blog.id,
        companyName: blog.companyName,
        blogs: blog.blogs,
      })),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Failed to fetch data.'});
  }
});

module.exports = app;
