const arr = ['Rahul','Dev','Ram','Shayam']
console.log(arr[0])
arr.push('Radha')                               // Add the element at teh end of the array which we give inside the push function
console.log(arr)
arr.pop('Rahul')                                // Remove the element from the array when we give inside the pop function
console.log(arr)
arr.unshift(0)                                  // Add value at the left of the array or starting of the array and will move the position of all the elements in the array
console.log(arr)
arr.shift()                                     // Will use to undo the unshift operation
console.log(arr)        
const arr2 = ['Stud1','Stud2','Stud3','Stud4']
console.log(arr2.push(arr2))                    // Push the given value in the given array as a unique value if we give array then it will treat this as a single element
console.log(arr2.concat(arr2))                  // Concat the given two arrays 
console.log([...arr,...arr2])                   // We can concatenate more than two arrys by using this method and we can say that this is pick and drop method 
console.log(Array.isArray('Rahul dev'))         // TO check is given value inside the function is array or not
console.log(Array.from('Rahul dev '))           // To make a new array of providing value inside the braces
console.log(Array.of('Rahul'))                  // To make a array 
const my_array = [1,2,3,[4,6,1],1,2,8,[3,4],4,9,[3,2]]
console.log(my_array.flat(Infinity))
console.log(Array.from({'name':'Rahul'}))       // It will make an empty array the method will get still confused 
const new_array = [1,2,3,4,5,6,0,4,6,1]
console.log(new_array.slice(1,4))               // Will make a slice or subset of an given array not includes the last range
console.log(new_array)                          // No changes in the real array
console.log(new_array.splice(2,6))              // Will make a slice and change will reflect in the original array 
console.log(new_array)                          // Changes in the real array
