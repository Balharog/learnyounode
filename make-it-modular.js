 var mymodule=require('./mymodule');
 var directoryName=process.argv[2];
 var extention=process.argv[3];

 mymodule(directoryName, extention, callback=(err, files)=>{
    for (i=0; i<files.length; i++){
        console.log(files[i])
    }
})