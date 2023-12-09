var date = new Date()
console.log(date)
console.log(date.toLocaleTimeString())
console.log(Date.now())
console.log(date.getDate())
console.log(date.getMonth()+1)
console.log(date.getTime())
var newDate = date.toLocaleString('default',{
    weekday : 'long',
    day :'2-digit',
    month :'2-digit',
    year :'2-digit'
})                  // Generating Own date format 
console.log(newDate)

var createdDate = new Date('2023-12-09')
console.log(createdDate.toLocaleDateString())
