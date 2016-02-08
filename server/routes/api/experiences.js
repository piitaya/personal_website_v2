var Experience = require(__base + "models/experience");
var express = require('express');

//configure routes

var router = express.Router();

router.route('/experiences')
	.get(function(req,res){
		Experience.find().populate('type').sort({startDate: -1}).exec(function(err,experiences){
			if (err) {
				res.status(200).json({ error: err });
			}
				
			res.status(200).json(experiences);
		});
	});

module.exports=router;
