const express = require('express');
const app = express();
const path = require('path');
const publicDrectory = path.join(__dirname,'public');
app.use(express.static(publicDrectory));


app.get('/',function(req,res){
    res.send("HELLO BUDDiES !");
})

app.get('/aboutus1',function(req,res){
    res.send("This is About us page.");
})

app.get('/login1',function(req,res){
    res.send("This is Login page.");
})
app.listen(8080);

app.get('/user/one/:user_id',function(req,res){
    res.send(req.params.user_id);
})
//multiple parameter pass
app.get('/:a/:b',function(req,res){
    res.send("Username: "+req.params.a+"<hr>password: "+req.params.b);
})


//two pages aboutus and login created

//app.get('/aboutus',function(req,res){
  //  res.sendFile(__dirname+'/login.html');
//})


// giving link to html file

app.get('/aboutus',function(req,res){
    res.sendFile(__dirname+"/aboutus.html");
})

app.get('/login',function(req,res){
    res.sendFile(__dirname+"/login.html");
})