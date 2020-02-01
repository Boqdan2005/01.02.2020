let age = prompt('Скільки років')

console.log(age)
if (typeof age !== 'string') {
    if (age < 16) {
        console.log('Rejected! You are too yang! Grow up')
    } else {
        console.log('Wellcom')
    }
} else {
    console.log(`Whow tyle of data. Entered age is ${typeof age}`)
}