var express = require('express');
var router = express.Router();
//var model = require('../models');
var model = require('../models')["burger"];

var debug = require('debug')('express-example');


//model.burger.sync();
model.sync({})

//Root route 
router.get('/', function (req, res) 
{
  debug('\n\nin root route\n');
  res.redirect('/burgers');
});

// Display all burgers route
router.get('/burgers', function (req, res) 
{
  model.findAll({}).then(function(data) 
  {
    console.log('data',data);
    var hbsObject = {burgers:data};
    console.log('hbsObject',hbsObject);
    res.render("index", {burgers : data});
  });
});


// Insert route inserts new burger in database 
router.post('/burgers/insertOne', function (req, res) 
{
  console.log('req.body',req.body);
  var newBurger = req.body.burger_name;
  console.log('newBurger',newBurger);
  model.create({
    burger_name: newBurger,
    devoured: false
  })
  .then(function () 
  {
    res.redirect("/burgers");
  });
});

router.put('/burgers/updateOne/:id', function (req, res) 
{
  var burgerId = req.params.id;
  model.update(
  {
    devoured: true
  },
  {
    where: 
    {
      id: burgerId
    }
  }).then(function () 
  {
    res.redirect("/burgers");
  });
});

router.delete('/burgers/delete/:id', function (req, res) 
{
  var burgerId = req.params.id;
  model.destroy(
  {
    where: {
      id: burgerId
    }
    }) .then(function() 
    {
      res.redirect('/burgers');
  });
});

module.exports = router;