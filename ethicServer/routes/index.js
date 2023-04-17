const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth.routes'))
router.use('/category', require('./category.routes'));
router.use('/item', require('./item.routes'));
router.use('/user', require('./user.routes'));
router.use('/upload', require('./upload.routes'));
module.exports = router;
