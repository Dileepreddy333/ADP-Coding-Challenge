var express = require('express');
var getYelpData = require('../public/javascripts/service')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  getYelpData().then((data) =>
    res.send(data.slice(0, 5))
  )
});

module.exports = router;
