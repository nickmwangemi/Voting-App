const Mongodb = require('mongodb')

const uri = 'mongodb://localhost/voting-app'

module.exports = async () => {
	const client = new Mongodb.MongoClient(uri, { useUnifiedTopology: true })
	await client.connect()

	return client.db()
}
