const fs = require('fs')
// console.log('hello')
// console.log(fs)
// console.log(fs.readFile('file.txt', 'utf-8', (err, data)=>{
//     console.log(err, data)
// }))   //--> NON BLOCKING
// console.log(fs.readFileSync('file.txt', 'utf-8', (err, data)=>{
//     console.log(err, data)
// }))
//-->BLOCKING


//another way

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log(a.toLocaleString())
// console.log('Finished reading file') //works on non blocking i/o model, so this line is printed 1st

//Node js doesnot stop and wait for the callback or the function to return, instead it continues with other code, and when the function returns the code is printed.

//to use synchronous sending and recv use readFileSync




//writing to a file
// fs.writeFile('file2.txt', 'this is a another set of data', ()=>{
//     console.log('Written to the file')
// })

b=fs.writeFileSync('file2.txt', 'this is data2')
console.log(b)