function greeting(name){
    console.log(`Good Morning, ${name}`)
}
greeting('Rahul dev')

// greet('Rahul dev')   ----->>> It will return error ''greet can't access before initiliazation
const greet = function(name){
    console.log(`Good Morning, ${name}`)
}
greet('Rahul dev')

