module.exports = {
	async redirects() {
		return [
			{
				source: '/game',
				destination: '/',
				permanent: true,
			},
		]
	},
}