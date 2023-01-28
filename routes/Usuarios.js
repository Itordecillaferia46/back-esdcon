const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuarios');

//get all routes

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/users', async (req, res) => {
	const usuarios = await Usuario.find();

	res.json(usuarios);
});

router.post('/users', async (req, res, next) => {
	try{
		const {nombre, correo, contraseña} = req.body;
		const usuarioNuevo = Usuario({
			nombre,
			correo,
			contraseña
		})
		const guardar = await usuarioNuevo.save()
		res.send(usuarioNuevo)
	} catch(err){
		next(err)
	}
})


// Get specific users
router.get('/users/:id', async (req, res) => {
	const p = await Usuario.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a users
router.delete('/users/:id', async (req, res) => {
	const result = await Usuario.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a users
router.patch('/users/:id', async (req, res) => {
	const p = await Usuario.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(p);
});

// Get random users
router.get('/users/random', async (req, res) => {
	const count = await Usuario.countDocuments();
	const random = Math.floor(Math.random() * count);
	const p = await Usuario.findOne().skip(random);

	res.json(p);
});

module.exports = router;