const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const planetRouter = require('./planetRouter');
const universRouter = require('./universRouter');
const superheroRouter = require('./superheroRouter');

router.use('/user', userRouter);
router.use('/planet', planetRouter);
router.use('/univers', universRouter);
router.use('/superhero', superheroRouter);

module.exports = router;
