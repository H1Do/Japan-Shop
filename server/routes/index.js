const Router = require('express');
const router = new Router();
const figureRouter = require('./figureRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');
const favoriteRouter = require('./favoriteRouter');
const orderListRouter = require('./orderListRouter');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/figure', figureRouter);
router.use('/basket', basketRouter);
router.use('/favorite', favoriteRouter);
router.use('/orders', orderListRouter);

module.exports = router;
