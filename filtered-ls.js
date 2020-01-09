var fs = require('fs');
var directory = process.argv[2];
var extention = process.argv[3];
var extentionRegEx = RegExp('\\.' + extention + '$');

file = fs.readdir(directory, (err, files)=> {
  for (i = 0; i < files.length; i++) {
    if (extentionRegEx.test(files[i])) {
      console.log(files[i]);
    }
  }
});