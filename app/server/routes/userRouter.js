const Router = require('express');
const UserController = require('../controllers/userController');
const authMiddlewate = require('../middleware/authMiddleware');
const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', authMiddlewate, UserController.check);

module.exports = router;
