const Router = require('express');
const PlanetController = require('../controllers/planetController');
const checkRole = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/', checkRole('ADMIN'), PlanetController.create);
router.get('/', PlanetController.getAll);

module.exports = router;
