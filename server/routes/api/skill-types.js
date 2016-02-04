var SkillType = require(__base + "models/skill-type");
var express = require('express');

//configure routes

var router = express.Router();

router.route('/skill-types')
	.get(function(req,res){
		SkillType.find(function(err,skillTypes){
			if (err) {
				res.status(200).json({ error: err });
			}
				
			res.status(200).json(skillTypes);
		});
	})

	.post(function(req,res){
		var skillType = new SkillType(req.body);
		skillType.save(function(err){
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(skillType);
		});
	});

router.route('/skill-types/:id')
	.put(function(req,res){
		SkillType.findOne({_id:req.params.id},function(err,skillType){

			if (err) {
				res.status(200).json({ error: err });
			}

			for(var prop in req.body){
				skillType[prop] = req.body[prop];
			}

			// save the Skill Type
			skillType.save(function(err) {
				if (err) {
					res.status(200).json({ error: err });
				}

				res.status(200).json({ message: 'Successfully updated' });
			});

		});
	})

	.get(function(req,res){
		SkillType.findOne({_id:req.params.id},function(err, skillType) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(skillType);
		});
	})

	.delete(function(req,res){
		SkillType.remove({
			_id: req.params.id
		}, function(err, skillType) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json({ message: 'Successfully deleted' });
		});
	});

module.exports=router;
