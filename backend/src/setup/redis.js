require('dotenv').config()
const redis = require('redis')
const redisPassword = process.env.REDIS_PASSWORD

module.exports = () => {
	return redis.createClient({
		host: process.env.HOST,
		no_ready_check: true,
		auth_pass: redisPassword,
	})
}
