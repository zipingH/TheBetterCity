/**
*  user.js
*  CSC648-su19-Team04
*  The Better City
*  Created by Maithri on 8/9/19.
*  This class will be used to handle user login
*  Copyright © CSC-648/848 Team 04. All rights reserved.
*/

const express = require('express');
const db = require('../config/db.conf.js');
var path = require('path');
var fs = require('fs');
var session = '';

//create router
const router = express.Router()

//route for login
router.post('/login' , (req, res) =>{
  var email = req.body.email;
    var password = req.body.password;
    const queryString = "select * from user where email = ?";

    db.query(queryString, [email], (err, results) => {
        if (err) {
            return res.status(400).send({
                err
            });
        }
        else {
            const userDetail = results[0];
            if (!userDetail) {
                res.status(401).end('unauthenticated');
            }
            else if (email == userDetail.email && password == userDetail.password) {
                req.session.user = userDetail;
                res.status(200).json(userDetail).end();
            }
            else {
                res.status(401).end('unauthenticated');
            }
        }
    })
})


//route for login
router.post('/reset' , (req, res) =>{
  res.render('Home');
});

  //route for signup/register
  router.post('/register' , (req, res) =>{

    console.log("inside register");
    console.log('name:' + req.body.name);
    console.log('email:' +req.body.email);

    const queryString = "INSERT INTO user (name, email, password, role) VALUES (?, ?, ?, 'user')";

    db.query(queryString, [req.body.name, req.body.email, req.body.password], (err, results) => {
      if (err) {
          return res.status(400).send({
              err
          });
      } else {
          res.render('Home');
      }
  })
})

  //route for logout
  router.post('/logout' , (req, res) =>{
    req.session.destroy(function() {
        console.log("user logged out.")
    });
    res.render('Home');
  });


module.exports = router
