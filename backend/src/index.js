const express = require('express')
const setupMiddleware = require('./setup/middleware')

const app = express()

const port = 4000

setupMiddleware(app)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
