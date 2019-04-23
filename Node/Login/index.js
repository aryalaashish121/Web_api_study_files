const chk = require ('./validate.js')
const obj = require('./objects.js')
const validate = require('./packages/node_modules/validate/build/validators.js')
const values = chk("123","gay")

const values1 = obj.one(3,3)
const values2 = obj.two()