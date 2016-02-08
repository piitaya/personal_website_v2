var Skill = require(__base + "models/skill");
var express = require('express');

//configure routes

var router = express.Router();

router.route('/skills')
	.get(function(req,res){
		Skill.find().populate("type").exec(function(err,skills){
			if (err) {
				res.status(200).json({ error: err });
			}
				
			res.status(200).json(skills);
		});
	});

module.exports=router;