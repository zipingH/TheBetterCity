/**
 * @class
 * this class serves as setup to connect to mysql.
 */
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'csc648.crgiewgyesqb.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'csc648_team4',
    database: 'csc648_db',
});

//check if database is connected
db.connect((err)=>{
    if(err){
        throw err;
    } 
    else{
    console.log('Database Connected!');
    }
})


module.exports = db