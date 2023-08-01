const express = require('express')
const router = express.Router();

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
    title: "Sign Up"
  }
  res.render('pages/Signup', {...data});
})

// SIGN IN
router.get('/signin', (req, res) => {
  const data = {
    title: "Sign In"
  }
  res.render('pages/Signin', {...data});
})

// REST OF PAGE (Not Found)
router.get('*', (req, res) => {
  const data = {
    title: "Not Found!!!"
  }
  res.render('pages/404', {...data});
})


module.exports = router;