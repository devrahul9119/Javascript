const name = 'Rahul'
if (name ==='Rahul'){
    console.log('He is a good boy')
}
else if (name ==='Dev'){
    console.log('Surname of Rahul dev')
}
else {
    console.log('Koi name suit ni kr rha')
}

// Switch Statement
let month = 'jan'
switch (month){
    case 'jan':
        console.log('Going to vaishno devi')
        break;
    case 'feb':
        console.log('Not to go anywhere')
        break;
    case 'march':
        console.log('Holi k liye ghr jaana h')
        break;
    default:
        console.log('You cannot go anywhere')
}

// falsy values
// false,0,-0,BigInt 0n,'',null,undefined,NaN

// True values
// [],true,1,'0','false',' ',{},function (){}


// Nullish Coalescing operator
const a = null ?? 10            // Returns 10
const b = undefined ?? 10      // Returns undefined
const c = 5 ?? 10               // returns 5

// Terniary Operator
const num1 = 200
num1 >= 180 ? console.log('less than 200'):console.log('More than 200')

