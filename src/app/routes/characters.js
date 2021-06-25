const { Router } = require('express');
const router = Router();

const dbConnection = require('../../config/bdConnection');
const connection = dbConnection();

const characters = require('../../sample.json');

const createCharacter = require('../../controllers/character.controller');
const getCharacters = require('../../controllers/character.controller');
// const getOneCharacter = require('../../controllers/character.controller');

router.post('/', createCharacter);
router.get('/', getCharacters);
// router.get('/:id', getOneCharacter);



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
