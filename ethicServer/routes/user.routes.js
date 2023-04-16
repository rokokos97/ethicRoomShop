const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', async (req, res) => {
  try {
    console.log(req.body);
    const { userId } = req.params
    console.log(userId);
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
    res.send(updatedUser)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const currentUser = await User.findById(userId)
    res.send(currentUser)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})
router.get('/', auth, async (req, res) => {
  try {
    const list = await User.find()
    res.send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

module.exports = router
