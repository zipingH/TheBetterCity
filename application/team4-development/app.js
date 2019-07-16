
//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();

//important.. this line creates a connection to use static files such as html saved in the
//folder views

//set views file

//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
app.use(express.static('./views'))


app.get('/',(req, res) => {
      res.render('Test');
  });


//create connection to get issue
const getIssue = require('./routes/getIssue.js')
app.use(getIssue);


app.listen(80, () => {
    console.log("Server is up and listening on 80...")
})
