const express = require('express');
const Items = require('../models/Item');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
  try {
    const list = await Items.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...',
    });
  }
});
router.patch('/:id', async (req, res) => {
});

module.exports = router;
