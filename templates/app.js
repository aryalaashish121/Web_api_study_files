const express = require('express');
const path = require('path');
const app = express();
//const viewPath = path.join(__dirname,'newFolder');
//app.set('views',viewPath);

app.set('view engine','hbs');
app.get('/abc',function(req,res){
    res.render('abc',
    {
        phone:'97798764741200',
        address:'Kathmandu',
        name:'Radke'
    })
})

app.get('/home',function(req,res){
    res.render('home',{
            name:"Radke Bista",
            address:"Hadigau, Nepal"
    })
})


app.get('/gallery',function(req,res){
    res.render('galary',{
   // people: ['Gay','wood taskari','radke','padke','surkheti kanxo','khale','khate','badar']
   people: ['assim','prakash','anil','sunil','jackey']
    })
})
app.listen(8080);