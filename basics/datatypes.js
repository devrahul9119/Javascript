'use strict' // treat all JS code as newer version

/*  alert('This is not a good practice') // This runs on the server not on node js */

// Symbol datatype
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id == anotherId)


// function
const sums = function sum(a,b){
    console.log(a+b)
}
sums(5,5)
