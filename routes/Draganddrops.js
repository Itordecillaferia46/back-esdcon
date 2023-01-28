const express = require('express');
const router = express.Router();
const Draganddrop = require('../models/Draganddrops');

//get all routes

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/dad', async (req, res) => {
	const draganddrops = await Draganddrop.find();

	res.json(draganddrops);
});

router.post('/dad', async (req, res, next) => {
	try{
		const {enunciado, respuesta, retroalimentacion} = req.body;
		const dadNuevo = Draganddrop({
			enunciado,
			respuesta,
			retroalimentacion
		})
		const guardar = await dadNuevo.save()
		res.send(dadNuevo)
	} catch(err){
		next(err)
	}
})


// Get specific users
router.get('/dad/:id', async (req, res) => {
	const p = await Draganddrop.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a users
router.delete('/dad/:id', async (req, res) => {
	const result = await Draganddrop.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a users
router.patch('/dad/:id', async (req, res) => {
	const p = await Draganddrop.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(p);
});

// Get random users
router.get('/dad/random', async (req, res) => {
	const count = await Draganddrop.countDocuments();
	const random = Math.floor(Math.random() * count);
	const p = await Usuario.findOne().skip(random);

	res.json(p);
});

module.exports = router;