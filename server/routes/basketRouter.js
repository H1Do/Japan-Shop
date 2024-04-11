const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const checkAuth = require('../middleware/authMiddleware');

router.post('/', checkAuth, basketController.add);
router.delete('/:id', checkAuth, basketController.delete);
router.get('/', checkAuth, basketController.getAll);

module.exports = router;
