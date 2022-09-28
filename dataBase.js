const mysql=require('mysql')

// mysql connection configuration
const connection=mysql.createConnection(
    {
        host:'localhost',
        database:'onito_assignment',
        user:'root',
        password:'123456'

    }
);
module.exports=connection