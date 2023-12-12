function greeting(name){
    console.log(`Good Morning, ${name}`)
}
greeting('Rahul dev')

// greet('Rahul dev')   ----->>> It will return error ''greet can't access before initiliazation
const greet = function(name){
    console.log(`Good Morning, ${name}`)
}
greet('Rahul dev')

// This keyword is used for current context
const user = {
    user_name : 'Rahul dev',
    user_email : 'devrahul9119@gmail.com',
    greet_user : function(){
            console.log(`${this.user_name}(${this.user_email}), Welcome to the world of AI`)
    }
}
user.greet_user()
