const express = require('express');
const router = express.Router();
const Contenido = require('../models/Contenidos');

//get all routes

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/', async (req, res) => {
	const contenidos = await Contenido.find();

	res.json(contenidos);
});

router.post('/newcontent', async (req, res, next) => {
	try{
		const {concepto, caracteristicas, sintaxis} = req.body;
		const contenidoNuevo = Contenido({
			concepto,
			caracteristicas,
			sintaxis
		})
		const guardar = await contenidoNuevo.save()
		res.send(contenidoNuevo)
	} catch(err){
		next(err)
	}
})


// Get specific users
router.get('/:id', async (req, res) => {
	const p = await Contenido.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a users
router.delete('/:id', async (req, res) => {
	const result = await Contenido.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a users
router.patch('/:id', async (req, res) => {
	const p = await Contenido.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(p);
});

// Get random users
router.get('/random', async (req, res) => {
	const count = await Contenido.countDocuments();
	const random = Math.floor(Math.random() * count);
	const p = await Contenido.findOne().skip(random);

	res.json(p);
});

module.exports = router;