const Router = require('express');
const router = new Router();
const favoriteController = require('../controllers/favoriteController');
const checkAuth = require('../middleware/authMiddleware');

router.post('/', checkAuth, favoriteController.add);
router.delete('/', checkAuth, favoriteController.delete);
router.get('/', checkAuth, favoriteController.getAll);

module.exports = router;
