var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录
router.get('/sign_in', function(req, res, next) {
  res.render('users/sign_in');
})

router.post('/sign_in', function(req, res, next) {
  
})

// 注册
router.get('/sign_up', function(req, res, next) {
  res.render('users/sign_up');
})

router.post('/sign_up', function(req, res, next) {
  
})

module.exports = router;
