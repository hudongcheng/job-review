var express = require('express');
var router = express.Router();

var db = require('../models/db');
var UserModel = db.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录
router.get('/sign_in', function(req, res, next) {
  if (req.session.user) {
    res.redirect("/")
  }
  else {
    res.render('users/sign_in');
  }
})

router.post('/sign_in', function(req, res, next) {
  UserModel.findOne({username: req.body['username']}, function(err, user) {
    if (user && user.password === req.body['password']) {
      // login OK
      req.session.user = user;
      res.redirect('/');
    }
    else {
      // login fialed
      res.redirect('sign_in');
    }
  })
})

// 注销
router.get('/sign_out', function(req, res, next) {
  req.session.user = null;
  res.redirect('/users/sign_in');
})

// 注册
router.get('/sign_up', function(req, res, next) {
  res.render('users/sign_up');
})

router.post('/sign_up', function(req, res, next) {
  UserModel.findOne({username: req.body['username']}, function(err, user) {
    if (user) {
      console.log(user);
      res.redirect('sign_up')
    }
    else {
      var newuser = new UserModel(req.body);
      newuser.save();
      res.redirect('sign_in');
    }
  })
})

module.exports = router;
