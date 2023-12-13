a = ['Python','C++','Java','JavaScript','R','Stats']
a.forEach(function (item){
    console.log(item)               // Passing a function in for each loop
})

a.forEach((item) => {
        console.log(item)           // Passing a arrow function to forEach loop
})

// Passing a external function to the forEach loop
function print(item){
    console.log(item)
}

a.forEach(print)

// We can use index,item,whole array parameters in forEach loop
a.forEach((item,index,arr) =>{
    console.log(item,index,arr)
})


// multiple objects inside Array
const student = [
    {
        studentName : 'Rahul dev',
        studentId : 1007
    },
    {
        studentName : 'Ram',
        studentId : 1008
    },
    {
        studentName :'Krishna',
        studentId : 1009
    },
    {
        studentName : 'Lord Rama',
        studentId : 1010
    },
]

student.forEach((item) =>{
    console.log(item.studentName)
})  

const values = student.forEach((item) =>{
    console.log(item.studentName)
    return item.studentName
})  
console.log(values)         // By this we can conclude that forEach loop never returns
