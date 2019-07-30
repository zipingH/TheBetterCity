const express = require('express')
const db = require('../config/db.conf.js');
var path = require('path');


//create router
const router = express.Router()

router.get('/', (req, res) =>{
  console.log("--Inside Main--");
  res.render('Home');
});

module.exports = router;
