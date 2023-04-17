const express = require('express');
const multer = require('multer')
const router = express.Router({mergeParams: true});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })


router.post('/', upload.single("image"),(req, res)=>{
  res.json({
    url:`/upload/${req.file.originalname}`
  })
})

module.exports = router
