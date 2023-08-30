const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();

let PORT = process.env.PORT || 5500;

//ROUTES

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('<h1>Data Recived Successfully</h1>');
})


app.listen(PORT, () => {
  console.log('server is running in port ' + PORT);
})