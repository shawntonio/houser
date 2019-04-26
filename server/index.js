const express = require('express');
const massive = require('massive');
require('dotenv').config()

const Ctrl = require('./controller')

const app = express()
const {CONNECTION_STRING} = process.env
const port = 4001

massive(CONNECTION_STRING).then(db => {
	app.set('db', db)
	app.listen(port, () => console.log(`listening on ${port}`))
})

app.use(express.json())

app.get('/api/houses', Ctrl.readHouses)
app.post('/api/houses', Ctrl.createHouse)
app.delete('/api/houses/:id', Ctrl.delete)
