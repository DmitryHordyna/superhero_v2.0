const Router = require('express');
const router = new Router();
const SuperheroController = require('../controllers/superheroController');

router.post('/', SuperheroController.create);
router.get('/', SuperheroController.getAll);
router.get('/:id', SuperheroController.getOne);

module.exports = router;
