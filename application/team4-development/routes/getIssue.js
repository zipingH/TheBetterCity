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

//route for getting a filter and search
router.get('/dropdown?', (req, res) =>{
  console.log(req.query)
  console.log("inside filter dropdown:--");
      console.log('filter:' + req.query.category_id);
      console.log('search:' + req.query.title);
      const category_id = req.query.category_id
      const title = req.query.title
        //const percent = req.query.title
    //    console.log('title'+ @title);

  const queryString3="SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
//const queryFilter = "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
//const querySearch = "SELECT * FROM issue, status, category WHERE issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
//const queryString = "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
//const queryString2= "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.status_id = status.status_id AND issue.category_id = category.category_id INTERSECT SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
const queryAll = "SELECT * FROM issue, status, category WHERE issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
if(category_id == 0){
  db.query(queryAll,[title], (err, results)=>{
        if (err) {
            return res.status(400).send({
                err
            });
        } else {
            res.render('Test',{ 'parks': results });
        }
    })
}

else {
  db.query(queryString3,[category_id,title],(err, results)=>{
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


module.exports = router
