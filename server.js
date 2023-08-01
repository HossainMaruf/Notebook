const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>DONE</h1>');
})
app.get('/about', (req, res) => {
  res.send('About Page');
})
app.get('/contact', (req, res) => {
  res.send('Contact Page');
})
app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page');
})
app.get('*', (req, res) => {
  res.send('404 Page');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})