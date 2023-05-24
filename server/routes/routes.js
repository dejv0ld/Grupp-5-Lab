const express = require('express')
const router = express.Router()
/* const { Document } = require('../models/model'); */
const { addMany } = require('../controllers/locationController');

router.get('/', (req, res) => {res.send('Welcome!')});
//get all
router.get('/all', async (req, res) => {
  
});

//get one
router.get('/location/:query', async (req, res) => {
  let data = await db.findAll()

  return res.json(data)
});

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
router.post('/add-mock', addMany);

//PUT
router.put('/edit', async (req, res) => {
  let _id = req.body._id
  let title = req.body.title
  let category = req.body.category
  let description = req.body.description
  let coordinates = req.body.coordinates

  try {
    let updateObj = new Document(title, category, description, coordinates);

    console.log(await db.update(_id, updateObj))

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});

router.delete('/remove', async (req, res) => {
  let _id = await req.body._id

  try {
    console.log(await db.deleteOne(_id))

    res.sendStatus(200)
  } catch (error) {
    console.error(error)

    res.sendStatus(500)
  }
});

module.exports = router;
