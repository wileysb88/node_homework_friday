var express = require('express');
var router = express.Router();
var model = require('../models/Shoe')


router.get('/', function(req, res, next){
  res.render('Shoes', { quote: 'OMG Shoes' })
})


/* GET Shoe listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, shoe){
    if (err) console.log(err);
    res.send(shoe);
  });
});

// GET /:id Shoe
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, shoe){
    if (err) console.log(err);
    res.send(shoe);
  });
});

// POST shoe
router.post('/', function(req, res, next) {
  model.create(req.body, function(err, shoe){
    if (err) console.log(err);
    res.send(shoe);
  });
});

// UPDATE shoe
router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, shoe){
    if (err) console.log(err);
    res.send(shoe);
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, shoe){
    if (err) console.log(err);
    res.send(shoe);
  });
});

// DELETE shoe
router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, shoe){
    if (err) console.log(err);
    res.send(shoe);
  });
});

module.exports = router;
