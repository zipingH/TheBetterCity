/**
*  postIssue.js
*  CSC648-su19-Team04
*  The Better City
*  Created by Ziping Huang on 8/6/19.
*  This class will be used to handle post requests for issue
*  Copyright © CSC-648/848 Team 04. All rights reserved.
*/

const express = require('express');
const db = require('../config/db.conf.js');
var path = require('path');
const multer = require("multer");


//set storage engine for photo
const storage = multer.diskStorage({
    destination: './public/IssueImages/',
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
    }
});

// initialize upload, check file size and file extentions
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    onError: function (err, next) {
        console.log('Upload Error: ', err);
        next(err);
    },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
});

//create router
const router = express.Router()


// route to post/submit issue
router.post('/postIssue', upload.single('photo'), (req, res) => {
    var title = req.body.title;
    //const photoPath = "../IssueImages/";
    var photo;
    if (!req.file) {
        photo = '';
        console.log('No Photo added');
    } else {
        photo = req.file.filename;
        console.log('Photo has added with filename');
    }
    var location = req.body.location;
    var description = req.body.description;
    var category = req.body.category;
    //email needs to be changed to the email of the user that is logged in
    var email = req.session.user.email;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    const query_postIssue = "INSERT INTO issue(issue_id, title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, ? , concat('../IssueImages/', ? ), ? , ? , '6',(SELECT id FROM user where email = ? ), ? , (SELECT category_id FROM category WHERE category = ? ));"

    db.query(query_postIssue, [title, photo, location, description, email, dateTime, category], (err, result) => {

        if (err) {
            message = "Failed to submit issue: " + err;
            console.log(message);
             res.redirect('/')
        } else {
            message = "Successfully submit issue";
            console.log(message);
            console.log('Body: ', req.body);
             res.redirect('/')

        }
    });
});



module.exports = router;
