const fs = require('fs')
fs.appendFileSync("some.txt","Antirpadke thapeko host")//this is add data to the file without editing earier one.
fs.writeFileSync("some.txt","Antirpadke thapeko host") //this will create a file or edit all if exist.

const data = fs.readFileSync("some.txt")  // read data from specfic file like some.txt
const e = data.toString() // converts buffer value to string
console.log(e)  //display value of e in console.