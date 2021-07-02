const { Router } = require('express');
const router = Router();

const {
  createCharacter,
  getCharacters,
  getOneCharacter,
  deleteOneCharacter,
  updateCharacter,
} = require('../../controllers/character.controller');

router.get('/', getCharacters);
router.get('/:id', getOneCharacter);
router.post('/', createCharacter);
router.delete('/:id', deleteOneCharacter);
router.put('/:id', updateCharacter);

module.exports = router;
