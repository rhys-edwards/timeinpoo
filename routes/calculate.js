var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', function(req, res, next) {
  res.render('index',{
  	'title': 'Sign Up'
  });
});

router.post('/index', function(req, res, next) {
  // Get form values
  var salary = req.body.salary;
  var poops = req.body.poops;
  var time = req.body.time;
  var timeInPoop;

  var totalPoopTime = poops * time;
  var paidPerMinute = salary / 124800;
  var timeInPoop = totalPoopTime * paidPerMinute;

  var toCost = timeInPoop;
  toCost = '$' + toCost.toFixed(2);

  console.log('$' + toCost);

  /*$(document).ready(function() {
    var output = document.getElementById('cost');
    output.innerHTML = toCost;
  });*/
  res.render('index', {cost: toCost});
  return false;

});

module.exports = router;
