const mysql = require('mysql');
require('dotenv').config();
dbconn = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DATABASE_PORT,

});
console.log();
dbconn.connect(function (err) {
    if (err) {
        throw err;
    } 
    else {
        console.log('database connection established');
    }
})

module.exports = dbconn;