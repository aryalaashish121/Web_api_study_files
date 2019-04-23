 const uppercase = require('./packages/node_modules/upper-case/upper-case.js')
 
 const validate = function(username,password){
    if(username=="padke" && password=="gay"){
        console.log(uppercase("This must be padke"))
      
    }
    else{
        console.log(uppercase("This cant be padke"))
    }
    
}
module.exports = validate;