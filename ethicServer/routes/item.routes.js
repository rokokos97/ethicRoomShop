const express = require('express');
const Item = require('../models/Item');
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
  try {
    const list = await Item.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...',
    });
  }
});
router.patch('/:id', async (req, res) => {
});
router.post('/create', async (req, res)=>{
  const item = req.body;
  try {
    const exists = await Item.findOne({name: item.name});

    if (exists) {
      return res.status(400).send(`${item.name} exists`);
    }

    const newItem = await Item.create(item);

    res.status(200).send(newItem);
  } catch (e) {
    res.status(500).json({
      message: "Server has error. Try later"
    });
  }
})

module.exports = router;
