const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var mongojs = require("mongojs");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/postlist"; //Use given database or our local one
var db = mongojs(MONGODB_URI);  //Connects to postlist database or heroku database
var posts = db.collection('posts'); //posts collection
var users = db.collection('users');

//CUSTOM POSTS ROUTES
app.get("/all", function(req, res) {  //Return all posts
  posts.find({}, function(error, found) {
    if (error) console.log(error);
    else {
      console.log(found);
      res.json(found);
    }
  });
});

app.get("/topicID/:id", function(req, res) { //Find posts by topicID
  posts.find({topicID: parseInt(req.params.id)}, function(error, found) {
    if (error) console.log(error);
    else {
      res.json(found);
    }
  });
});

app.post("/submit", function(req, res) { //Create New Post
  posts.insert(req.body, function(error, saved) {
    console.log("reqbody", req.body)
    if (error) console.log(error);
    else {
      console.log("created", saved);
      res.send(saved);
    }
  });
});

app.post("/update/:id", function(req, res) { //Edit post's date/content/link
  posts.findAndModify({ query:  {"_id": mongojs.ObjectId(req.params.id)}, 
                        update: { $set: {date: req.body.date, content: req.body.content, link: req.body.link}}}, function(error, edited) {
    if (error) console.log(error);
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});

app.delete("/delete/:id", function(req, res) { //Delete post by ID
  posts.remove( {"_id": mongojs.ObjectId(req.params.id)}, function(error, deleted) {
    if (error) console.log(error);
    else {
      console.log(deleted)
      res.send(deleted);
    }
  });
});
//CUSTOM USER ROUTES
app.get("/userID/:id", function(req, res) { //Find posts by topicID
  users.findOne({userID: req.params.id}, function(error, found) {
    if (error) console.log(error);
    else {
      console.log(found)
      res.json(found);
    }
  });
});
app.post("/newUser", function(req, res) { //Create New Post
  users.insert(req.body, function(error, saved) {
    console.log("new user", req.body)
    if (error) console.log(error);
    else {
      console.log("created user", saved);
      res.send(saved);
    }
  });
});
app.post("/updateUser/:id", function(req, res) { //Edit post's date/content/link
  users.findAndModify({ query:  {"userID": req.params.id}, 
                        update: { $set: {userName: req.body.userName, userAvatar: req.body.userAvatar}}}, function(error, edited) {
    if (error) console.log(error);
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Send every request to the React app
// Define any API routes before this runs
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
