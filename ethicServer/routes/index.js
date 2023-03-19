const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth.routes'));
router.use('/categories', require('./category.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;
