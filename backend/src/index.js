const express = require('express')
const setupMiddleware = require('./setup/middleware')
const setupDatabase = require('./setup/database')

const app = express()

const port = 4000

setupMiddleware(app)

setupDatabase()
	.then((client) => {
		console.log(client)
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch(console.error)
