const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/user/:id', async (req, res) => {
	// The below is what will make Chrome open up this file in inspect mode
	// debugger
	const id = parseInt(req.params.id)
	// should get user by given id in route param
  try {
	const user = await users.findUser(id)
	res.status(200).send(user)
  }
  catch (error) {
  	res.status(404).send(`User with id ${id} not found`)
  }
})

app.delete('/user/:id', async (req, res) => {
  const id = parseInt(req.params.id)
	try {
		await users.deleteUser(id)
		res.status(201).send({id})
	}
	catch(error) {
		res.status(404).send(`User with id ${id} not found`)
	}
})

module.exports = app
