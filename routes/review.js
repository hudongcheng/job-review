var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('review/index', {title: 'Job review'});
});

router.get('/new', function(req, res, next) {
  res.render('review/new', { title: 'Express' });
})

module.exports = router;
