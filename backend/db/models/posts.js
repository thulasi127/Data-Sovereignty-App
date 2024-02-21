const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  companyName: String,
  articles: [],
});

const PostModel = mongoose.model('Goal', postSchema);

module.exports = PostModel;
