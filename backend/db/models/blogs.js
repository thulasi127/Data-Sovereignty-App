const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  companyName: String,
  blogs: [],
});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
