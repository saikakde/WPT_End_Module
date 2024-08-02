const express = require("express");
const app = express();
const path = require("path");
const bodyparser=require("body-parser");
const route=require("./route/route");

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:false}));
app.use("/",route)
app.listen(3002,function(){
console.log("Server run at 3002")
})

module.exports=app;