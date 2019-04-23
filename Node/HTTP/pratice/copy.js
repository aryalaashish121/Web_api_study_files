const fs = require('fs');
const value = fs.copyFileSync('one.txt','two.txt');
const result = fs.readFileSync('two.txt')

const http = require('http');
http.createServer(function(req,res){

    res.write(result);
    res.end();
    

}).listen(90);