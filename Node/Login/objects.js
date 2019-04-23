const conversion = require('./number_convert')
module.exports={
    one:
    function(a,b){
        c=a+b;
        const result = conversion(c);
        console.log("Sum of two number is: " +result)
    },

    two:
    function(){
        console.log("This is second function")
    }
}

//uppercase & validator email/password
