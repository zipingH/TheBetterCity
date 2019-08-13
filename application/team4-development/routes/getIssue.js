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

router.post('/search', (req, res) => {
      const searchBy = req.body.searchBy;
      const searchText = req.body.searchText;
      const filters = req.body.filters;
      var queryParams = [];

      var query = 'select * from issue';

      if (searchBy == 'location') {
        query = query + 'where location LIKE concat(' % ', ? ,' % ')';
        queryParams[0] = searchText;
      } else if (searchBy == 'title') {
        query = query + 'where title LIKE concat(' % ', ? ,' % ')';
        queryParams[0] = searchText;
      }

      if (filters.categories) {
        query = query + ' and category_id IN ?';
        queryParams[1] = filters.categories;
      }
      if (filters.status) {
        query = query + ' and status IN ?';
        queryParams[1] = filters.status;
      }
      db.query(query, queryParams, (req, res) => {
        if (err) {
          return res.status(400).send({
            err
          });
        } else {
          var length = results.length;
          var displayed = pageNo * pageSize;
          if (pageSize < length) {
            results = results.splice(displayed, pageSize);
          }
          var displaying = displayed + pageSize >= length ? length : (displayed + pageSize);

          res.render('Home', {
            'parks': results,
            'pageSize': pageSize,
            'pageNo': pageNo,
            'from': displayed + 1,
            'to': displaying,
            'total': length
          });
        }
      });
});
      //route for getting a filter and search
      router.get('/dropdown', (req, res) => {

            const category_id = req.query.category_id
            const title = req.query.title
            const status_id = req.query.status_id
            const location = req.query.location
            console.log(req.query)
            console.log("inside filter dropdown:--");
            console.log('filter:' + req.query.category_id + ' ' + status_id);
            console.log('search:' + req.query.title);
            //const percent = req.query.title
            //    console.log('title'+ @title);

            const query_percentLikeByTitle = "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            //const queryFilter = "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            //const querySearch = "SELECT * FROM issue, status, category WHERE issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            //const queryString = "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            //const queryString2= "SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.status_id = status.status_id AND issue.category_id = category.category_id INTERSECT SELECT * FROM issue, status, category WHERE issue.category_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            const query_selectAll = "SELECT * FROM issue, status, category WHERE issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            const query_selectStatus = "SELECT * FROM issue, status, category WHERE  issue.status_id = ? AND issue.title LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id;"
            const query_location = "SELECT * FROM issue, status, category WHERE issue.location LIKE concat('%', ? ,'%') AND issue.status_id = status.status_id AND issue.category_id = category.category_id"

            if (category_id == 0) {
              db.query(query_selectAll, [title], (err, results) => {
                if (err) {
                  return res.status(400).send({
                    err
                  });
                } else {
                  var length = results.length;
                  var displayed = pageNo * pageSize;
                  if (pageSize < length) {
                    results = results.splice(displayed, pageSize);
                  }
                  var displaying = displayed + pageSize >= length ? length : (displayed + pageSize);

                  res.render('Home', {
                    'parks': results,
                    'pageSize': pageSize,
                    'pageNo': pageNo,
                    'from': displayed + 1,
                    'to': displaying,
                    'total': length
                  });
                }
              })
            }

               if (category_id > 0 || category_id < 6) {
                db.query(query_percentLikeByTitle, [category_id, title], (err, results) => {
                  if (err) {
                    return res.status(400).send({
                      err
                    });
                  } else {
                    var length = results.length;
                    var displayed = pageNo * pageSize;
                    if (pageSize < length) {
                      results = results.splice(displayed, pageSize);
                    }
                    var displaying = displayed + pageSize >= length ? length : (displayed + pageSize);

                    res.render('Home', {
                      'parks': results,
                      'pageSize': pageSize,
                      'pageNo': pageNo,
                      'from': displayed + 1,
                      'to': displaying,
                      'total': length
                    });
                  }
                })
              }

                // dropdown menu route to select status if category_id is not in the database
                 if (status_id > 5) {
                  db.query(query_selectStatus, [status_id, title], (err, results) => {
                    if (err) {
                      return res.status(400).send({
                        err
                      });
                    } else {
                      var length = results.length;
                      var displayed = pageNo * pageSize;
                      if (pageSize < length) {
                        results = results.splice(displayed, pageSize);
                      }
                      var displaying = displayed + pageSize >= length ? length : (displayed + pageSize);

                      res.render('Home', {
                        'parks': results,
                        'pageSize': pageSize,
                        'pageNo': pageNo,
                        'from': displayed + 1,
                        'to': displaying,
                        'total': length
                      });
                    }
                  });
                }

                  //dropdown menu to search by location
                  else {
                    db.query(query_location, [location], (err, results) => {
                      if (err) {
                        return res.status(400).send({
                          err
                        });
                      } else {
                        var length = results.length;
                        var displayed = pageNo * pageSize;
                        if (pageSize < length) {
                          results = results.splice(displayed, pageSize);
                        }
                        var displaying = displayed + pageSize >= length ? length : (displayed + pageSize);

                        res.render('Home', {
                          'parks': results,
                          'pageSize': pageSize,
                          'pageNo': pageNo,
                          'from': displayed + 1,
                          'to': displaying,
                          'total': length
                        });
                      }
                    })
                  }
                });



                    module.exports = router
