const Router = require('express');
const router = new Router();
const figureRouter = require('./figureRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/figure', figureRouter);

module.exports = router;
