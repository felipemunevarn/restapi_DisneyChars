const { Router } = require('express');
const router = Router();

const { signUp } = require('../../controllers/user.controller');

router.post('/register', signUp);

module.exports = router;
