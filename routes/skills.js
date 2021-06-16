var express = require('express');
const app = require('../server');
var router = express.Router();
// require the skill model
const skillCtrl = require('../controllers/skills');

router.get('/', skillCtrl.index);
router.get('/new', skillCtrl.new);
router.get('/:id', skillCtrl.show);
router.post('/', skillCtrl.create);
router.delete('/:id', skillCtrl.delete);

module.exports = router;
