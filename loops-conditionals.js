// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

// const down = Math.floor(a)
// console.log(down)
// const up = Math.ceil(b)
// console.log(up)
// const absol = Math.abs(b - a)
// console.log(absol)

// const mathArr = [a, b, c, d, e]
// const findLongest = () => {
//     let long = 0
//     for (let i = 0; i < mathArr.length; i++){
//         if (mathArr[i] > long) {
//             long = mathArr[i]
//         }    
//     }
//     return long
// }
// console.log('this is long', findLongest())
// const longest = Math.max(a, b, c, d, e)
// console.log(longest, 'with math max')

// const root = Math.sqrt(e)
// console.log('sqroot', root)
// const power = Math.pow(e, d)
// console.log(power, 'power')

const digitalDie = Math.floor(Math.random() * (6 - 1 + 1)+ 1)
console.log(digitalDie, 'nice roll')

let firstVariable = 'Hello World'
firstVariable = 22
let secondVariable = firstVariable
secondVariable = 'What??!'
//22
console.log(firstVariable)

const yourName = 'Katie'
console.log('Hello, my name is ' + yourName + '.')

const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

console.log(a < b)
console.log(c !== d)
console.log('Peanut' === 'Peanut')
console.log(a < b > c)
console.log(a === a !== d)
console.log(e === 'Jelly Bean')
console.log('e' !== 'Eh')

const animal = 'cow'
if (animal === 'cow') console.log('moooo')
else console.log('hey, you\'re not a cow')

let age = 10
if (age >= 16) console.log('Here are the keys')
else (console.log('not old enough'))

// for (let i = 1; i < 11; i++)console.log(i)
// for (let i = 80; i > 49; i--)console.log(i)

// for (let i = 1; i < 101; i++){
//     if (i % 2 !== 0) console.log(i, ' is odd')
// }

for (let i = 0; i < 101; i++){
    if(i % 5 === 0 && i !== 0)console.log('I found a ' + i + '. High Five')
}

// let bank_account = 0
// for (let i = 1; i < 11; i++){
//     bank_account += i
// }
// console.log(bank_account)
let bank_account = 0
for (let i = 1; i < 101; i++){
    bank_account += (i * 2)
}
console.log(bank_account)

const boardSize = 20
const number = (boardSize / 2) ** 2
const rows = number / (boardSize / 2)
console.log(rows, 'this is row')
console.log(number, 'this is number')
let hash = ' #'
let rowHash = hash.repeat(number/rows)
//console.log(rowHash)
for (let i = 1; i <= rows; i++){
    console.log(rowHash)
}
