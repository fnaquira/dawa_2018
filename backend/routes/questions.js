var express = require('express');
var router = express.Router();
var model_questions = require('../models/questions');

/* GET users listing. */
router.post('/all', function(req, res, next) {
	model_questions.all({},'cod title answers',function(data){
		res.send(data);
	});
});

module.exports = router;