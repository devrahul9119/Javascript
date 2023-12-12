// for of loop for map and string 
const str = 'Rahul dev'
let counter = 0
for (const i of str){
    console.log(`The charater at ${counter} is : ${i}`)
    counter = counter + 1
}


let map = new Map()
map.set('Ind','India')
map.set('Us','United States')
map.set('Uk','United Kingdom')
map.set('Aus','Australia')
console.log(map)

for (const [key,value] of map){
    console.log(`key : ${key} , value : ${value}`)
}


// for in loop for objects
const student = {
    name : 'Rahul',
    id : 1007,
    stream :'B.Tech',
    uni : 'ICFAI'
}
for (const i in student){
    console.log(`the key is ${i} and value is ${student[i]}`)
}