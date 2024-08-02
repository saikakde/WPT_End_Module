const mysql=require("mysql2")

var mysqlConnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'12345',
    database:'courses',
    port:3306
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Db connected!!")
    }
    else{
        console.log(err)
    }
})

module.exports=mysqlConnection;