const express = require('express');
const router = express.Router();
const Usuario = require('../models/Evaluaciones');

//get all routes

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/evaluaciones', async (req, res) => {
	const usuarios = await Usuario.find();

	res.json(usuarios);
});

router.post('/evaluaciones', async (req, res, next) => {
	try{
		const {nombre, correo, contraseña} = req.body;
		const evaluacionNueva = Evaluacion({
			nombre,
			correo,
			contraseña
		})
		const guardar = await evaluacionNueva.save()
		res.send(evaluacionNueva)
	} catch(err){
		next(err)
	}
})


// Get specific tests
router.get('/evaluaciones/:id', async (req, res) => {
	const p = await Evaluacion.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a tests
router.delete('/evaluaciones/:id', async (req, res) => {
	const result = await Evaluacion.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a tests
router.patch('/evaluaciones/:id', async (req, res) => {
	const p = await Evaluacion.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(p);
});

// Get random tests
router.get('/evaluaciones/random', async (req, res) => {
	const count = await Usuario.countDocuments();
	const random = Math.floor(Math.random() * count);
	const p = await Evaluacion.findOne().skip(random);

	res.json(p);
});

module.exports = router;