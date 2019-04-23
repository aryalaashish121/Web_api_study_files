const fs = require('fs');
const a = fs.readFileSync('hello.json');
const b = a.toString();
const data = JSON.parse(b);

const http = require('http');
http.createServer(function(req,res){

    res.write("<table border='2'><tr><td>Book name</td><td>author</td><td>Publication date</td></tr><tr><td>"+
    data.book+"</td><td>"+data.author+"</td><td>"+data.pub_date+"</td></tr></table>")
    res.end();
    

}).listen(90);