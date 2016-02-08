var Skill = require(__base + "models/skill");
var express = require('express');

//configure routes

var router = express.Router();

router.route('/skills')
	.get(function(req,res){
		Skill.find().exec(function(err,skills){
			if (err) {
				res.status(200).json({ error: err });
			}
				
			res.status(200).json(skills);
		});
	})

	.post(function(req,res){
		var skill = new Skill(req.body);
		skill.save(function(err){
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(skill);
		});
	});

router.route('/skills/:id')
	.put(function(req,res){
		Skill.findOne({_id:req.params.id},function(err,skill){

			if (err) {
				res.status(200).json({ error: err });
			}

			for(var prop in req.body){
				skill[prop] = req.body[prop];
			}

			// save the Skill
			skill.save(function(err) {
				if (err) {
					res.status(200).json({ error: err });
				}

				res.status(200).json({ message: 'Successfully updated' });
			});

		});
	})

	.get(function(req,res){
		Skill.findOne({_id:req.params.id}).exec(function(err, skill) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(skill);
		});
	})

	.delete(function(req,res){
		Skill.remove({
			_id: req.params.id
		}, function(err, skill) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json({ message: 'Successfully deleted' });
		});
	});

module.exports=router;
