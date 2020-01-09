var fs = require('fs') // require is a special function provided by node
var number = 0 // we don't know what the number is yet since it is stored in a file
var content=""
file=process.argv[2]

const getData=(callback)=>{
  fs.readFile(file, function doneReading(err, fileContents) {
    content = fileContents.toString()
    number=content.split('\n')
    callback()
  })
}



const logResult=()=>{
console.log(number.length-1)
}
getData(logResult)