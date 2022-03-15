const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host:'31.170.161.22',
    user:'u101685278_blog',
    password:'Pachiman9102',
    database:'u101685278_blog'
});

mysqlConnection.connect(function( err ){
    if(err ){

        console.log(err);
        return;

    } else {

        console.log('Db is connect');

    }
});

module.exports = mysqlConnection;