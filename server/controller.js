
module.exports = {
	async readHouses(req, res){
		const db = req.app.get('db')

		const houses = await db.read_houses()
		res.status(200).send(houses)
	},

	async createHouse(req, res){
		const db = req.app.get('db')
		const {address, name, city, state, zipcode, img, mortgage, rent} = req.body

		await db.create_house({address, name, city, state, zipcode, img, mortgage, rent})

		res.sendStatus(200)
	},

	delete(req, res){
		const db = req.app.get('db')

		db.delete_house(req.params.id)
		.then(() => res.sendStatus(200))
	}
}