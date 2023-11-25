const accountId = 45333
let accountEmail = 'devrahul9119'
var password = 'Rahul'
accountCity = 'Jind'
// accountId = 2 // Not possible we can't modify the const value
console.log(accountId)
console.table([accountId,password,accountEmail,accountCity])

/* Prefer not to use var 
because of issue in block scope and functional scope */

console.log(accountCity)
let value
console.log(value)