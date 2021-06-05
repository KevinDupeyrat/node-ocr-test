const express = require('express');
const router = express.Router();
const stuffCtrl = require('./../service/service')

router.get('/', stuffCtrl.getAllThings);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;