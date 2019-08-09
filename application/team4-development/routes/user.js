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


module.exports = router;
