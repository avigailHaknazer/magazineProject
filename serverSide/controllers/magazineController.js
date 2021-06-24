const Magazine = require('../model/magazine')
const createMagazine = async (req, res) => {
    try {
        let newMagazine = new Magazine(req.body)
        await newMagazine.save()
        res.status(200).json({ newMagazine })
    }
    catch(err) {
        res.status(400).json({ err })
    }
}


module.exports = { createMagazine}