const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {generateUserData} = require('../utils/helpers');
const tokenService = require('../services/token.service');
const {check, validationResult} = require('express-validator');


router.post('/singUp', [
  check('email', 'email is not correct').isEmail(),
  check('password', 'password length min 8 symbols').isLength(
      {min: 8}),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            errors: errors.array(),
          },
        });
      }

      const {email, password} = req.body;
      const existingUser = await User.findOne({email});
      if (existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL_EXIST',
            code: 400,
          },
        });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        ...generateUserData(),
        ...req.body,
        password: hashedPassword,
      });
      const tokens = tokenService.generate({_id: newUser._id});
      await tokenService.save(newUser._id, tokens.refreshToken);
      res.status(201).send({...tokens, userId: newUser._id});
    } catch (e) {
      res.status(500).json({
        message: 'Server error. Please repeat latter...',
      });
    }
  }],
);
// router.post('/singInWithPassword', async (req, res) => {
// });
// router.post('/token', async (req, res) => {
// });
module.exports = router;
