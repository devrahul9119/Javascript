// Objects in Javascript
const user = {
    name:'Rahul dev',
    age:21
}
console.log(user.name)              // to access the object attributes by using . operator
console.log(user['name'])           // to access the object attributes by using '' operator

// Objects of symbol
const email = Symbol('useremail')   // create of symbol object
user[email] = 'devrahul9@gmail.com'
console.log(user[email])            
console.log(typeof user[email])    

Object.freeze(user)                    // to freeze the object so no one can add the attribute or update the attribute

user.greeting = function(){             // adding a function attribute to the object
    console.log('hello user, Rahul dev')
}
user.greeting1 = function(){                // use this to access the attribute of same object 
    console.log(`Hello user, ${this.name}`)
}

console.log(user.greeting)              // It refers the refrence of the function
console.log(user.greeting())            // It returns the value inside the function

const new_user = new Object()              // Creation of singleton object
const new_user1 = {}                       // Creation of non singleton object

const new_user2 = {                        // Creation of nested object
    user:{
        username:{
            fullname:{
                name:'Rahul dev'
            }
        }
    }
}

console.log(new_user2.user.username?.fullname.name)      // We use ? because if the object not found then it will not return the error

const obj = {
    1 :'Rahul',
    2 :'Dev'
}
const obj1 = {
    3 :'Bhawna',
    4 :'Meghna'
}
const obj3 = {...obj,...obj1}               // Merging of two objects or by using this method we can easily concat multiple objects
const obj4 = Object.assign({},obj,obj1)     // Merging of two list by using the object assign method


Object.keys(user)                               // use to print the keys
Object.values(user)                            // use to print the values 
Object.entries(user)                           // user to print the object in key : value form
user.hasOwnProperty('name')                    // Use to check whether the property exist in object or not

