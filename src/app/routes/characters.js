const { Router } = require('express');
const router = Router();
const dbConnection = require('../../config/bdConnection');

const characters = require('../../sample.json');

const connection = dbConnection();

const createCharacter = require('../../controllers/character.controller');
router.post('/test', createCharacter);

router.get('/', (req, res) => {
  connection.query('SELECT * FROM characters', (err, result) => {
    // console.log(createCharacter);
    res.json(result);
  });
});

router.post('/', (req, res) => {
  const id = characters.length + 1;
  const newCharacter = {...req.body, id}
  characters.push(newCharacter);
  res.json(characters)
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { image , name , age , weight , history , movies } = req.body;
  characters.map((character, i) => {
    if (character.id == id) {
      character.image = image;
      character.name = name;
      character.age = age;
      character.weight = weight;
      character.history = history;
      character.movies = movies;
    }
  });
  res.json(characters)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  characters.map((character, i) => {
    if (character.id == id) {
      characters.splice(i, 1);
    }
  });
  res.json(characters)
});

module.exports = router;
