const express = require('express')
const db = require('../config/db.conf.js');
var path = require('path');
var fs = require('fs');

//create router
const router = express.Router()

router.get('/', (req, res) =>{
  console.log("--Inside Main--");
  res.render('Home');
});

router.get('/submitIssue', (req, res) =>{
  console.log("--Inside submitIssue--");
  res.render('submitIssue');
});

router.get('/showDetail', (req, res) =>{
  console.log("--Inside showDetail--");
  res.render('showDetail');
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
