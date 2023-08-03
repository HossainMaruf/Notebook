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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Use the loaded controllers
app.use('/', pagesController);
app.use('/', authController);


DB.Connect();
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})