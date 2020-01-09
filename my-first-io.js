const fs = require('fs')
let content= process.argv[2]

const file=fs.readFileSync(content)

const result=file.toString().split('\n')
console.log(result.length-1)


