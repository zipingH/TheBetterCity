/**
 * @class
 * this class serves as setup to connect to mysql and create mysql pools.
 */
const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'ec2-18-216-80-193.us-east-2.compute.amazonaws.com',
    user: 'ubuntu',
    password: 'csc648',
    database: '648_db',
    multipleStatements: true
})

module.exports = db