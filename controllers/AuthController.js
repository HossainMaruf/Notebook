const express = require('express')
const router = express.Router();
// get the User model
const User = require('../models/User');
// get the validation class
const {Validation} = require('../helpers/ValidateFormInput');


// POST THE SIGN UP DATA
router.post('/signup', async (req, res) => {
  const errors = Validation.ValidateRegistration(req.body);
  const count = Validation.ErrorCount(errors);

  const data = {
    title: "Signup",
    old: req.body,
    errors
  }

  if(count > 0) {
    res.render("pages/Signup", {...data});
  } else {
    // save the user info to Database using try catch
    try {
      const user = await User.findOne({email: req.body.email});
      if(user) {
        // this email already exist
        data.errors.email = "Email already exists";
        res.render("pages/Signup", {...data});
      } else {
        // this email is not exist (so it is new user)
        const newUser = new User(req.body);
        const createdUser = await newUser.save();
        res.render('pages/Home', {title: "Home"});
      }
    } catch(error) {
      data.errors.other = "Something went wrong";
      res.render("pages/Signup", {...data});
    }
  }
})

router.post('/signin', (req, res) => {
  res.send('Login Data');
})


module.exports = router;