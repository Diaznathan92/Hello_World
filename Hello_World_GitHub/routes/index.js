var express = require('express');
var router = express.Router();
var mySQL = require('MySQL');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Changes for GitHub Master at 9:14AM' });
});

router.get('/home',function(req,res,next){
    var query = 'Select 1 from list_db.user_info';

    var con = mySQL.createConnection({
    host: "localhost",
    user: "root"
    });
   
    con.connect(function(err) {
    if (err) throw err;
    con.query(query, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.render('index', {title: result[0].Username});
    });
    });
});
module.exports = router;
