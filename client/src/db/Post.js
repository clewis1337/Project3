const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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