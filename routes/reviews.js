var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  var date = new Date();
//  date.getFullYear();
  res.render('reviews/index', {title: 'Job reviews', years:[2016,2017,2018], months: [1,2,3,4,5,6,7,8,9,10,11,12]});

});


router.get('/new', function(req, res, next) {
  res.render('reviews/new', { title: 'Express' });
})

module.exports = router;
