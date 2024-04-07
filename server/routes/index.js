const Router = require('express');
const router = new Router();
const figureRouter = require('./figureRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/figure', figureRouter);
router.use('/basket', basketRouter);

module.exports = router;
