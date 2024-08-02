const mysql = require("mysql")

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'anchal@356',
    database:'course_management',
    port:3306
})

connection.connect((err)=>{

    if(!err){
        console.log("Connection done")
    }
   else{
    console.log("error in db")
   }


})


module.exports=connection;