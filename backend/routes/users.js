var express = require('express');
var router = express.Router();
var model_users = require('../models/users');
var model_questions = require('../models/questions');

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
	model_questions.get_q(req.body,function(valid){
		model_users.set_question({
			...req.body,
			isCorrect: valid.isCorrect
		},function(data){
			res.send({
				...data,
				isCorrect: valid.isCorrect
			});
		});
	})
});

module.exports = router;