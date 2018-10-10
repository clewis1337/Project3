const mongoose = require("mongoose");
const db = require("../models/Posts");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/postlist"
);

const postSeed = [
  {
    id: "",
    topicID: "",
    author: "",
    authorAvatar: "",
    content: "",
    link: "",
    date: new Date(Date.now())
  },
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " posts inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });