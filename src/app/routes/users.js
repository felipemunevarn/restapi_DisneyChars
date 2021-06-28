const { Router } = require('express');
const router = Router();

const { signUp, login } = require('../../controllers/user.controller');

router.post('/register', signUp);
router.post('/login', login);

module.exports = router;
