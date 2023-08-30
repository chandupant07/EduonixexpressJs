const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();
console.log(process.env.PORT)

//ROUTES

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/', (req, res) => {
  console.log(req.body)
  res.send('<h1>Data Recived Successfully</h1>');
})
const PORT = process.env.PORT || 4400
app.listen(PORT, () => {
  console.log('server is running in port ' + PORT);
})