// LOAD THE CORE MODULE
const express = require('express');
const ejs = require('ejs');

// LOAD THE PagesController
const pagesController = require('./controllers/PagesController');


// creating the app
const app = express();

// Set the views directory
app.set('views', 'views');
// set the view engine
app.set('view engine', 'ejs');

// Use the loaded controllers
app.use('/', pagesController);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})