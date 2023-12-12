// function greeting(name){
//     console.log(`Good Morning, ${name}`)
// }
// greeting('Rahul dev')

// // greet('Rahul dev')   ----->>> It will return error ''greet can't access before initiliazation
// const greet = function(name){
//     console.log(`Good Morning, ${name}`)
// }
// greet('Rahul dev')

// // This keyword is used for current context
// const user = {
//     user_name : 'Rahul dev',
//     user_email : 'devrahul9119@gmail.com',
//     greet_user : function(){
//             console.log(`${this.user_name}(${this.user_email}), Welcome to the world of AI`)
//     }
// }
// user.greet_user()

// console.log(typeof this)            // To check the type of this keyword 


// function users(){
//     const name = 'Rahul'            // We can't use this inside the function
//     console.log(this.name)
// }
// users()

// const users = function(){               // We can't use this inside the function
//     const name = 'Rahul'
//     console.log(this.name)
// }
// users()

// Arrow functions
// const sum = (num1,num2) => num1+num2        // this is known as implicit return if we not use return keyword
// const sum1 = (num1,num2) => (num1+num2)     // this is known as implicit return if we not use return keyword
// const sum2 = (num1,num2) => ({user_name :'Rahul dev'})      // this is how to print the object by using the implicit return method


// IIFE (Iterative Invoked Function Expressions) === ()()

(function sum(){                    // Named IIFE
    console.log('Rahul dev')
})();

(() =>{                             // Unnamed IIFE
    console.log('Rahul dev')
})()
