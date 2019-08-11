/**
 * @module
 * this class will be used to handle get requests for show details
 */

const express = require('express')
const db = require('../config/db.conf.js');


//create router
const router = express.Router()


//to check for empty object on error handling
Object.prototype.isEmpty = function () {
    for (var key in this) {
        if (this.hasOwnProperty(key))
            return false;
    }
    return true;
}


//route for getting a filter and search
router.get('/showDetail', (req, res) => {
    const issue_id = req.query.issue_id
    console.log("Inside Show Detail route")
    console.log(req.query)
    console.log(issue_id)

    const query_showIssue = "SELECT * FROM issue, status, category WHERE  issue_id = ?  AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
    db.query(query_showIssue , [issue_id], (err, results) => {
        if (err) {
            return res.status(400).send({
                err
            });
        } else {
            res.render('showDetail', { 'parks': results });
    }
});


module.exports = router
