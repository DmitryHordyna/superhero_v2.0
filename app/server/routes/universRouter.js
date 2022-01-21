const Router = require('express');
const UniversController = require('../controllers/universController');
const checkRole = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/', checkRole('ADMIN'), UniversController.create);
router.get('/', UniversController.getAll);

module.exports = router;
