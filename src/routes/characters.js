const { Router } = require('express');
const router = Router();

const characters = require('../sample.json');

router.get('/', (req, res) => {
  res.json(characters);
});

module.exports = router;
