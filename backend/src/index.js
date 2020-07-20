const express = require('express')
const setupRouter = require('./setup/router')
const setupDatabase = require('./setup/database')
const setupMiddleware = require('./setup/middleware')

const app = express()

const port = 4000

setupMiddleware(app)

setupRouter(app)

setupDatabase()
	.then((client) => {
		setupRouter(app, client)

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch(console.error)
