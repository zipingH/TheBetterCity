const express = require('express')
const db = require('../config/db.conf.js');
var path = require('path');


//create router
const router = express.Router()

router.get('/', (req, res) =>{
  console.log("--Inside Main--");
  res.sendFile(path.resolve('views/Home.html'));
});

module.exports = router;
