const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define post schema
var postSchema = new Schema({
  topicID: {
    type: Number,
    default: ''
    },
    date: {
    type: Date,
    default: Date.now(),
    },
    author: {
        type: String,
        default: ''
    },
    authorAvatar: {
        type: String,
        default: false
    },
    authorLevel: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }
});

// Export Mongoose model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;