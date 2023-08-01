const express = require('express')
const router = express.Router();


// POST THE SIGN UP DATA
router.post('/signup', (req, res) => {
  res.send(req.body);
})

router.post('/signin', (req, res) => {
  res.send('Login Data');
})


module.exports = router;