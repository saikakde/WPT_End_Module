const express = require("express");
const router = express.Router();
const sqlConnection = require("../db/dbConnect");


router.get("/",function(req,resp){
 resp.render('login');
})



router.post("/login",function(req,resp){
  sqlConnection.query("select email , password from user where email=? and password=?",[req.body.email,req.body.password],function(err,data){

  if(err){
    resp.status(500).send("Invalid Credentials")
  }
else{
    resp.redirect("/course");
}

})
})

// to retrieve the course details
router.get("/course",function(req,resp){
sqlConnection.query("select * from course",function(err,data){
    if(err){
        resp.status(500).send("no data found")
    }
    else{
        resp.status(200).render("displaydetails",{coursedata:data})
    }
})
})


router.get("/deletecourse/:cid",function(req,resp){

sqlConnection.query("delete from course where cid=?",[req.params.cid],function(err,data){
    if(err){
        resp.status(500).send("no data deleted");
    }
    else{
        resp.status(200).send("Data deleted Successfully");
    }
})

})



router.get("/editcourse/:cid",function(req,resp){
  sqlConnection.query("select * from course where cid=?",[req.params.cid],function(err,data){
   if(err){
    resp.status(500).send("data not found");
}
   
   else{
       resp.render("updatecourse",{course:data[0]})  
    }  
} ) 

})

  router.post("/updateproduct",function(req,resp){
    sqlConnection.query("update course set cname=? , fees=?,duration=? where cid=?",[req.body.cname,req.body.fees,req.body.duration,req.body.cid],function(err,result){
        if(err){
            resp.status(500).send("no data updated")
        }
        else{
            // resp.status(200).send("Data updated Succesfully")
            resp.redirect("/course");
        }
    })

  })

router.get("/addcourseform",function(req,resp){
    resp.render("addCourse")
})
router.post("/insertdetails", function(req, resp) {
    sqlConnection.query("INSERT INTO course (cname, fees, duration) VALUES (?, ?, ?)", [req.body.cname, req.body.fees, req.body.duration], function(err, data) {
        if (err) {
            console.error("Error occurred while inserting data:", err);
            resp.status(500).send("Error occurred");
        } else {
            resp.redirect("/course");
        }
    });
});



module.exports=router;
