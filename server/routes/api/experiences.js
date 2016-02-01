var Experience = require(__base + "models/experience");
var express = require('express');

//configure routes

var router = express.Router();

router.route('/experiences')
	.get(function(req,res){
		Experience.find(function(err,experiences){
			if (err) {
				res.status(200).json({ error: err });
			}
				
			res.status(200).json(experiences);
		});
	})

	.post(function(req,res){
		var experience = new Experience(req.body);
		experience.save(function(err){
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(experience);
		});
	});

router.route('/experiences/:id')
	.put(function(req,res){
		Experience.findOne({_id:req.params.id},function(err,experience){

			if (err) {
				res.status(200).json({ error: err });
			}

			for(var prop in req.body){
				experience[prop] = req.body[prop];
			}

			// save the Experience
			experience.save(function(err) {
				if (err) {
					res.status(200).json({ error: err });
				}

				res.status(200).json({ message: 'Successfully updated' });
			});

		});
	})

	.get(function(req,res){
		Experience.findOne({_id:req.params.id},function(err, experience) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json(experience);
		});
	})

	.delete(function(req,res){
		Experience.remove({
			_id: req.params.id
		}, function(err, experience) {
			if (err) {
				res.status(200).json({ error: err });
			}

			res.status(200).json({ message: 'Successfully deleted' });
		});
	});

module.exports=router;
