const express = require('express')
const setupRouter = require('./setup/router')
const setupDatabase = require('./setup/database')
const setupMiddleware = require('./setup/middleware')

const app = express()

const port = 4000

setupMiddleware(app)

async function start() {
	const db = await setupDatabase()
	setupRouter(app, db)

	app.listen(port, () => {
		console.log(`Server is running on port ${port}`)
	})
}

start().catch(console.error)
