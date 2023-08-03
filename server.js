// LOAD THE CORE MODULE
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser')

// Get the Database file
const {DB} = require('./helpers/Database');

// Load the PagesController
const pagesController = require('./controllers/PagesController');
// LOAD the authController
const authController = require('./controllers/AuthController');


// creating the app
const app = express();

// Set the views directory
app.set('views', 'views');
// set the view engine
app.set('view engine', 'ejs');

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
// encode the url
app.use(bodyParser.urlencoded({ extended: false }));


// Use the loaded controllers
app.use('/', pagesController);
app.use('/', authController);


DB.Connect();
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})