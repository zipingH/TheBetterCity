/**
 * @class
 * this class serves as setup to connect to mysql and create mysql pools.
 */
const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '@Test123',
    database: 'library3',
    multipleStatements: true
})

module.exports = db