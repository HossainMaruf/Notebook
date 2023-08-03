const express = require('express')
const router = express.Router();
// get the validation class
const {Validation} = require('../helpers/ValidateFormInput');


// POST THE SIGN UP DATA
router.post('/signup', (req, res) => {
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
    // save the user info to Database
    res.send("No Errors");
  }
})

router.post('/signin', (req, res) => {
  res.send('Login Data');
})


module.exports = router;