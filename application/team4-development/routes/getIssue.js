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
router.get('/getCategory', (req, res) =>{
const queryString = "SELECT issue.title, issue.photo, issue.location, issue.description, issue.time_stamp FROM issue , category where issue.category_id = ? AND category.category_id = ?;"
const category_id = req.query.category_id
db.query(queryString, [category_id, category_id], (err, results)=>{
    if (err) {
        return res.status(400).send({
            err
        });
    } else {
        res.send(results)
    }

})
})

router.get('/getPercentLike', (req, res) =>{

})



module.exports = router