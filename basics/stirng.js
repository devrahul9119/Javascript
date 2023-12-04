var student_name = 'Rapper'
var password = 2345
var designation = 'Machine Learning'

// string concatenation using normal method
console.log(student_name+' is a '+designation+' engineer and he is an '+password+' years old')

// Using string Interpolation method
console.log(`${student_name} is a ${designation} engineer and he is ${password} years old`)


// Creation of string by using Javascript objects
const name = new String('Machine learning is a field of Data Science which use  to hold the dataset')
console.log(name)
// String methods
console.log(name.length)            //length of string
console.log(name.__proto__)         // prototype of string
console.log(name.toUpperCase())     // Convert string to the upper case 
console.log(name.charAt(4))         // return the letter at the given position
console.log(name.indexOf('R'))      // return the index of given letter or string
console.log(name.substr(1,3))       // return the substring from the given string
console.log(name.slice(20,22))       // slice the given string by using indexing
console.log('   Rahul dev    '.trim())        // Remove unwanted spaces form the given string  
console.log(name.replace('field','Branch'))     // Replace the substr in given string
console.log('Rahul dev is a good boy and he is a Python developer and he will also become a Machine learning developer'.includes('Rahul dev')) // Return is given value includes in the given string or not if not then false if includes then true
console.log('Machine leanring is a fastly evolving field nowadays'.split(' '))
