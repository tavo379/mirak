'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Post = require('./models/post')

const app = express()
const router = express.Router()

const port = process.env.API_PORT || 3001

mongoose.connect('mongodb://tavo379:mirak123@ds151450.mlab.com:51450/mirak')

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.setHeader('Cache-Control', 'no-cache');
 next();
});

router.get('/', function(req, res) {
 res.json({ message: 'Api corriendo'});
});

//adding the /comments route to our /api router
router.route('/posts')

.get(function(req, res) {
  Post.find(function(err, posts) {
    if (err)
    res.send(err);
    //responds with a json object of our database comments.
    res.json(posts)
  });
})
//post new comment to the database
.post(function(req, res) {
  var post = new Post();
  //body parser lets us use the req.body
  post.title = req.body.title;
  post.description = req.body.description;
  post.save(function(err) {
    if (err)
    res.send(err);
    res.json({ message: 'Se agrego el post' });
  });
});

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
