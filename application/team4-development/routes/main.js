const express = require('express')
const db = require('../config/db.conf.js');
var path = require('path');
var fs = require('fs');

//create router
const router = express.Router()

router.get('/', (req, res) =>{
  var queryRecent = 'SELECT * FROM csc648_db.issue order by time_stamp desc limit 4;'
  db.query(queryRecent, (err, results)=>{
      if (err) {
        return res.status(400).send({
            err
        });
    } else {
      console.log("--Inside Main--");
      res.render('Home',{ 'session': req.session ? req.session : '', 'recentIssues' : results});
    }
  })
});

router.get('/submitIssue', (req, res) =>{
  console.log("--Inside submitIssue--");
  res.render('submitIssue');
});

router.get('/contact', (req, res) =>{
  console.log("--Inside contact--");
  res.render('contact');
});

router.get('/aboutUs', (req, res) =>{
  console.log("--Inside aboutUs--");
  res.render('aboutUs');
});

module.exports = router;
