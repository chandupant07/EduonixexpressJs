const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

require('dotenv').config();

let PORT = process.env.PORT || 5500;

//ROUTES

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send(`Your Name is :${req.body.name} Your Mail is :${req.body.mail} your Password :${req.body.password}`
//   );
// })

app.post('/api/register', (req, res) => {
  console.log(req.body)
  res.json({
    sucess: 'true'
  })
})


app.listen(PORT, () => {
  console.log('server is running in port ' + PORT);
})