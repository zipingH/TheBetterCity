//use path module
const path = require('path');

//use mysql database
const mysql = require('mysql');

//use bodyParser middleware
const bodyParser = require('body-parser');

//use express module
const express = require('express');

//use session
var session = require('express-session');

//use hbs view engine
const hbs = require('hbs');

const app = express();

//set view engine
app.set('view engine', 'hbs');

//load all hbs partials
hbs.registerPartials(__dirname + '/views/partials');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//use helper function 'equal'
hbs.registerHelper("equal", require("handlebars-helper-equal"));

//set public folder as static folder for static file
app.use('/assets', express.static(__dirname + '/public'));
app.use(express.static('./views'));
app.use(express.static('public'));

//initialize sessions
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


//create connection to get issue
const getIssue = require('./routes/getIssue.js');
app.use(getIssue);

//create connection to post issue
const postIssue = require('./routes/postIssue.js');
app.use(postIssue);

//create connection to main
const main = require('./routes/main.js');
app.use(main);

//create connection to user login/signup
const user = require('./routes/user.js');
app.use(user);

app.listen(80, () => {
  console.log("Server is up and listening on 80...")
})
