/**
 * Created by Ashwin on 18/06/2017.
 */

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', {title: 'About', name: 'Ashwin'});
});

module.exports = router;
