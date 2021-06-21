const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({"Title": "Hello World"});
});

router.get('/test', (req, res) => {
  const data = {
    name: "Felipe",
    website: 'github.com/andresmunevar'
  }
  res.json(data);
});

module.exports = router;
