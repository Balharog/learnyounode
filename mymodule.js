var fs=require('fs');
var path=require('path');

module.exports = function (directoryName, extention, callback) {
    var extention= "."+extention;
    fs.readdir(directoryName,(err, files)=>{
        if(err){
            callback(err,null)
        }
        else{
            tab=[];
            files.forEach((p)=>{
                if(path.extname(p)===extention){
                    tab.push(p);
                }
            })
            callback(null, tab)
        }
    })
 }