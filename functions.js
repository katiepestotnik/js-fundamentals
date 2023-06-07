const getSecondLargest = (arr) => {
    if (arr.length <= 1) {
        console.log('invalid input: 2 or more numbers needed in the array')
        return null
    } else if (isNaN(arr[0])){
        console.log('invalid input: numbers only')
        return null
    } else {
        arr.sort((a, b) => a - b)
        console.log(`${arr[arr.length -2]} is the second largest number`)
        return arr[arr.length -2]
    }
}

console.log(getSecondLargest([55, 100, 90]))
console.log(getSecondLargest([55]))
console.log(getSecondLargest('test'))
console.log(getSecondLargest([55, 2000, 40, 2001, 3400]))
console.log(getSecondLargest(['e', 4, 5]))

