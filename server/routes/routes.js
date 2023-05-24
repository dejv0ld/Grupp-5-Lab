const express = require('express')
const router = express.Router()
/* const { Document } = require('../models/model'); */
const { addMany, getAll, updateOne, removeOne } = require('../controllers/locationController');

router.get('/', (req, res) => {
    res.send('Welcome!')
})
//get all
router.get('/all', getAll)

//get one
router.get('/location/:query', async (req, res) => {
    let data = await db.findAll()

    return res.json(data)
})

//post
/* router.post('/add', async (req, res) => {
  let title = req.body.title;
  let category = req.body.category;
  let description = req.body.description;
  let coordinates = req.body.coordinates;

  try {
    let newDocument = new Document(title, category, description, coordinates);

    console.log(await db.insert(newDocument))

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}); */
router.post('/add-mock', addMany)

// Update a location(PUT)
router.put('/locations/:id', updateOne)

router.delete('/remove', async (req, res) => {
    let _id = await req.body._id

  try {
    console.log(await db.removeOne(_id))

        res.sendStatus(200)
    } catch (error) {
        console.error(error)

        res.sendStatus(500)
    }
})

module.exports = router
