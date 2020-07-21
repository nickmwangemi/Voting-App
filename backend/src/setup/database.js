const Mongodb = require('mongodb')

const uri = process.env.DATABASE_URI

module.exports = async () => {
	const client = new Mongodb.MongoClient(uri, { useUnifiedTopology: true })
	await client.connect()

	return client.db()
}
