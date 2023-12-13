let a = ['Rahul','Dev','Sum','Sun']
console.log(a)
let b = a.filter((element) => element.startsWith('S'))
console.log(b)


let books = [
    {title :'Book One',genre :'Data Science',publish:2000,edition:4},
    {title :'Book Two',genre :'Data Analysis',publish:2000,edition:4},
    {title :'Book Three',genre :'Data Engineering',publish:2000,edition:4},
    {title :'Book Four',genre :'Data Analyst',publish:2000,edition:4},
    {title :'Book Five',genre :'Data Storyteller',publish:2000,edition:4},
    {title :'Book Six',genre :'Data',publish:2000,edition:4}
]

let book = books.filter((bk) => {
    return bk.genre ==='Data'
})
console.log(book)


