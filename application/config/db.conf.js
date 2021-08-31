/**
 * @class
 * this class serves as setup to connect to mysql.
 */
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zipingh777',
    database: 'csc648_db',
    port: 3306,
    multipleStatements: true
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
