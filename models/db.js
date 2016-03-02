
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/job-review');

//db.on('error', console.error.bind(console,'数据库连接错误:'));
//db.once('open', function() {
//  console.log('open mongodb');
//})

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var TaskSchema = new Schema({
  author : ObjectId,
  parent : ObjectId,
  catalog: ObjectId,
})

var ReviewSchema = new Schema({
  author  : ObjectId,
  isoWeek : Number, // 周数
  catalog : String, // 工作类型
  task    : String, // 工作任务
  content : String, // 工作内容
  progress : String, // 完成情况
  cost : Number, // 用时
  created : Date,
  modified : Date,
  checked : Date
})

var CommentSchema = new Schema({
  author : ObjectId,
  review : ObjectId,
  content : String
})

var UserSchema = new Schema({
  name      : String,
  username  : String,
  email     : String,
  password  : String,
  admin     : Boolean
//  date      : Date
})

db.model('Review', ReviewSchema);
db.model('User', UserSchema);

var BlogPost = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});

module.exports = db;
