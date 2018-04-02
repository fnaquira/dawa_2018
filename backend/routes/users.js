var express = require('express');
var router = express.Router();
var model_users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
	model_users.all({},'email nomb appat apmat',function(data){
		res.send(data);
	});
});

router.post('/by_email', function(req, res, next) {
	model_users.get({email: req.body.email},function(data){
		if(data!=null)
			res.send(data);
		else
			res.send({error: 'Not found'});
	});
});

router.post('/set_q',function(req,res){
	model_users.set_question(req.body,function(data){
		res.send(data);
	});
});

module.exports = router;