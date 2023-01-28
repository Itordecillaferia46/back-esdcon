const express = require('express');
const router = express.Router();
const Contenido = require('../models/Actividades');

//get all routes

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/actividad', async (req, res) => {
	const actividades = await Actividad.find();

	res.json(actividades);
});

router.post('/actividad', async (req, res, next) => {
	try{
		const {tipo_actividad} = req.body;
		const actividadNueva = Actividad({
			tipo_actividad
		})
		const guardar = await actividadNueva.save()
		res.send(actividadNueva)
	} catch(err){
		next(err)
	}
})


// Get specific activity
router.get('/actividad/:id', async (req, res) => {
	const p = await Actividad.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a users
router.delete('/actividad/:id', async (req, res) => {
	const result = await Contenido.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a users
router.patch('/actividad/:id', async (req, res) => {
	const p = await Actividad.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(p);
});

// Get random users
router.get('/contenido/random', async (req, res) => {
	const count = await Actividad.countDocuments();
	const random = Math.floor(Math.random() * count);
	const p = await Contenido.findOne().skip(random);

	res.json(p);
});

module.exports = router;