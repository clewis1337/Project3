const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define post schema
var postSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  topicID: {
    type: String,
    unique: true,
  },
  author: String,
  authorAvatar: String,
  content: String,
  link: String,
  date: { 
    type: Date, 
    default: Date.now 
}, 
});

// Export Mongoose model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;