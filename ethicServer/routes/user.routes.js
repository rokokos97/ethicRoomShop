const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
    res.send(updatedUser)
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...'
    })
  }
})
// router.get('/', auth, async (req, res) => {
//   try {
//     const list = await User.find()
//     res.send(list)
//   } catch (e) {
//     res.status(500).json({
//       message: 'Server error. Please try later...'
//     })
//   }
// })
router.get('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId)
    res.send(user)
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...'
    })
  }
})
module.exports = router
