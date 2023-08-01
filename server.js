const express = require('express');
const ejs = require('ejs');
const path = require('path');
// creating the app
const app = express();


// Set the views directory
app.set('views', 'views');
// set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    title: "Home",
  }
  res.render('pages/Home', {...data});
})
app.get('/about', (req, res) => {
  const data = {
    title: "About"
  }
  res.render('pages/About', {...data});
})
app.get('/contact', (req, res) => {
  const data = {
    title: "Contact"
  }
  res.render('pages/Contact', {...data});
})
app.get('/dashboard', (req, res) => {
  const data = {
    title: "Dashboard"
  }
  res.render('pages/Dashboard', {...data});
})
app.get('*', (req, res) => {
  const data = {
    title: "Not Found!!!"
  }
  res.render('pages/404', {...data});
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})