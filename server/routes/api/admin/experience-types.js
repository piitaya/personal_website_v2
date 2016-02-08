var ExperienceType = require(__base + "models/experience-type");
var express = require('express');

//configure routes

var router = express.Router();

router.route('/experience-types')
	.get(function(req,res){
		ExperienceType.find(function(err,experienceTypes){
			if (err) {
				res.status(200).json({ error: err });
			}
				
			res.status(200).json(experienceTypes);
		});
	})

	.post(function(req,res){
		var experienceTypes = new ExperienceType(req.body);
		experienceTypes.save(function(err){
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(experienceTypes);
		});
	});

router.route('/experience-types/:id')
	.put(function(req,res){
		ExperienceType.findOne({_id:req.params.id},function(err,experienceType){

			if (err) {
				res.status(200).json({ error: err });
			}

			for(var prop in req.body){
				experienceType[prop] = req.body[prop];
			}

			// save the Skill Type
			experienceType.save(function(err) {
				if (err) {
					res.status(200).json({ error: err });
				}

				res.status(200).json({ message: 'Successfully updated' });
			});

		});
	})

	.get(function(req,res){
		ExperienceType.findOne({_id:req.params.id},function(err, experienceType) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(experienceType);
		});
	})

	.delete(function(req,res){
		ExperienceType.remove({
			_id: req.params.id
		}, function(err, experienceType) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json({ message: 'Successfully deleted' });
		});
	});

module.exports=router;
