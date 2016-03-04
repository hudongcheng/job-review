var express = require('express');
var router = express.Router();
var ReviewModel = require('../models/db').model('Review');
var hbs = require('hbs');

hbs.registerHelper('', function() {

});


/* GET users listing. */
router.get('/', function(req, res, next) {
  //  var date = new Date();
  //  date.getFullYear();
  ReviewModel.find(function(err, reviews) {
    res.render('reviews/index', {title: 'Job reviews',
                                 years:[2016,2017,2018],
                                 months: [1,2,3,4,5,6,7,8,9,10,11,12],
                                 reviews: reviews
                                });
  })

});


router.post('/', function(req, res, next) {
  var review = ReviewModel(req.body);
  review.save();
  res.json({r:'OK'});
})


router.put('/:id', function(req, res, next) {
  ReviewModel.findByIdAndUpdate(req.params['id'], req.body, function(err) {
    //if (err) return handleError(err);
    res.json({status:'success', message:'udate review success'});
  })
})


router.delete('/:id', function(req, res, next) {
  //req.params['id'];
  ReviewModel.remove({_id: req.params['id']}, function (err) {
    //if (err) return handleError(err);
  })
  res.json({status:'success', message:'delete review success'});
})

/*
router.get('/new', function(req, res, next) {
  res.render('reviews/new', { title: 'Express' });
})
 */

module.exports = router;
