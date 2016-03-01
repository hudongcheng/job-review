
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/job-review');

//db.on('error', console.error.bind(console,'数据库连接错误:'));
//db.once('open', function() {
//  console.log('open mongodb');
//})

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Review = new Schema({
  author : ObjectId,
  title  : String,
  body   : String,
  date   : Date
})

var UserSchema = new Schema({
  name      : String,
  username  : String,
  email     : String,
  password  : String,
  admin     : Boolean
//  date      : Date
})

db.model('User', UserSchema);

var BlogPost = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});

module.exports = db;
