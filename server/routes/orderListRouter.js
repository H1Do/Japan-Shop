const Router = require('express');
const router = new Router();
const orderListController = require('../controllers/orderListController');
const checkAuth = require('../middleware/authMiddleware');

router.post('/', checkAuth, orderListController.add);
router.get('/', checkAuth, orderListController.getAll);
router.get('/:id', checkAuth, orderListController.getOne);

module.exports = router;
