const fs = require('fs');
const a = fs.readFileSync('hello.json');
const b = a.toString();
const data = JSON.parse(b);
console.log(data.book);
console.log(data.author);
console.log(Date-data.pub_date);