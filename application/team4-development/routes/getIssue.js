/**
 * @module
 * this class will be used to handle get requests for issue
 */

const express = require('express')
const db = require('../config/db.conf.js');


//create router
const router = express.Router()


//to check for empty object on error handling
Object.prototype.isEmpty = function() {
    for (var key in this) {
        if (this.hasOwnProperty(key))
            return false;
    }
    return true;
}

//route for getting a category by category_id
router.get('/getCategory', (req, res) =>{
const queryString = "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
const queryAll = "SELECT * FROM issue, status, category WHERE ?=? AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
const category_id = req.query.category_id
if(category_id != 0){
    db.query(queryString, [category_id], (err, results)=>{
        if (err) {
            return res.status(400).send({
                err
            });
        } else {
            res.render('Test',{ 'parks': results });
        }
    })
}
else{
    db.query(queryAll, [category_id,category_id], (err, results)=>{
        if (err) {
            return res.status(400).send({
                err
            });
        } else {
            res.render('Test',{ 'parks': results });
        }
    })
}
})

//route using percent like to search issue where park is in the title
router.get('/search', (req, res) =>{
    const queryString = "SELECT * FROM issue, status, category WHERE issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
    const title = req.query.title
    db.query(queryString,[title],(err, results)=>{
        if(err) {
            return res.status(400).send({
                err
            });
        }
        else{
            res.render('Test',{ 'parks': results });
        }
    })
})

module.exports = router
