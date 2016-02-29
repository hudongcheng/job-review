
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/job-review');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var Review = new Schema({
  author : ObjectId,
  title  : String,
  body   : String,
  date   : Date
})

var User = new Schema({
  username  : String,
  login     : String,
  email     : String,
  date      : Date
})

var BlogPost = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});