const express = require('express')
const router = express.Router();
// Get the User model
const User = require("../models/User");

// HOME PAGE
router.get('/', (req, res) => {
  const data = {
    title: "Home",
  }
  res.render('pages/Home', {...data});
})

// ABOUT PAGE
router.get('/about', (req, res) => {
  const data = {
    title: "About"
  }
  res.render('pages/About', {...data});
})

// CONTACT PAGE
router.get('/contact', (req, res) => {
  const data = {
    title: "Contact"
  }
  res.render('pages/Contact', {...data});
})

// DASHBOARD
router.get('/dashboard', (req, res) => {
  const data = {
    title: "Dashboard"
  }
  res.render('pages/Dashboard', {...data});
})

// SIGN UP
router.get('/signup', (req, res) => {
  const data = {
    title: "Sign Up",
    errors: false, 
    old: false
  }
  res.render('pages/Signup', {...data});
})

// SIGN IN
router.get('/signin', (req, res) => {
  const data = {
    title: "Sign In",
    errors: false,
    old: false
  }
  res.render('pages/Signin', {...data});
})

// Users List Page
router.get('/users', async (req, res) => {
  const users = await User.find();
  const data = {
    title: "Users List",
    users
  }
  res.render("pages/Users", {...data});
})

// REST OF PAGE (Not Found)
router.get('*', (req, res) => {
  const data = {
    title: "Not Found!!!"
  }
  res.render('pages/404', {...data});
})


module.exports = router;