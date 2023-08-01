const express = require('express');
const ejs = require('ejs');
const path = require('path');
// creating the app
const app = express();


// Set the views directory
app.set('views', './views');
// set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('Home');
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'About.html'));
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Contact.html'));
})
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Dashboard.html'));
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})