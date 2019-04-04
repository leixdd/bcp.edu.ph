const express = require('express');
const colors = require('colors');
const path = require('path');
const bodyParser = require('body-parser'); //parsing incoming request
const cors = require('cors');
const passport = require('passport');

var app = express();

//PORT
const port = process.env.PORT || 8423;

// Cross Origin Resource Sharing Middleware
app.use(cors());

//set Static Folder (Public)

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Wrong Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


var http = require('http').createServer(app);

http.listen(port, function () {
  console.log('Server is listening at port ' + port);
});
