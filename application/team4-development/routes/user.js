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
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { check, validationResult } = require('express-validator');

//create router
const router = express.Router()

//route for login
router.post('/login' , (req, res) =>{
  console.log("--Inside login --");
  var email = req.body.email;
    var password = req.body.password;
    var path=req.body.currentURL;
      console.log('Email:' + email +'Password:' + password + path);
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
                console.log('Email not found in DB');
              res.redirect('path');
            }
            //compares hashed password
            else if (email == userDetail.email){
              bcrypt.compare(password, userDetail.password, function(err, result) {
                if (result == true) {
                  req.session.user = userDetail;
                  res.redirect(path);
                    console.log("--login successful  --");
                    console.log('session:' + req.session);
                    console.log('  req.session.user :' + req.session.user);
                    console.log('  session.user.id :' + req.session.user.id);
                    console.log('  session.user.name :' + req.session.user.name);
                    console.log('  session.user.email :' + req.session.user.email);
                } else {
                  console.log('Password doesnt match ');
                  console.log(userDetail.password);
                  console.log(password);
                  res.redirect('path');
                }
              });
          }
        }
      });
});

//route for login
router.post('/reset' , (req, res) =>{

    var path=req.body.currentURLResetPwd;
    console.log(path)
res.redirect(path);
});

  //route for signup/register
  router.post('/register' , (req, res) =>{

  var path=req.body.currentURLSignUp;
    console.log("inside register");
    console.log('name:' + req.body.name);
    console.log('email:' +req.body.email  + path);
    //hash password
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      const queryString = "INSERT INTO user (name, email, password, role) VALUES (?, ?, ?, 'user')";
      console.log('password:' +hash);
      db.query(queryString, [req.body.name, req.body.email, hash], (err, results) => {
        if (err) {
            return res.status(400).send({
                err
            });
        } else {
          res.redirect(path);
        }
    });
  });


});

  //route for logout
  router.get('/logout' , (req, res) =>{

    req.session.destroy(function() {
        console.log("user logged out.")
    });
    res.redirect('/');
  });


module.exports = router
