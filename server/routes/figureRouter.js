const Router = require('express');
const router = new Router();
const figureController = require('../controllers/figureController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('admin'), figureController.create);
router.get('/', figureController.getAll);
router.get('/:id', figureController.getOne);

module.exports = router;
