//console.log(process.argv); //argv gives filenames what you type or enter  in commands gives in array

// where is this files located
// console.log(process.cwd());

// library for file system
const fs = require("fs");

exports.writeHTML5public = writeHTML5;
var writeHTML5 = () =>{
    // read html5
    const html5 = fs.readFileSync(`${__dirname}/index.html`)
    const filename = process.argv[2]
    // fs.writeFileSync(`${process.cwd()}/${filename}`,"<html><body></body></html>")
    fs.writeFileSync(`${process.cwd()}/${filename}`,html5)


}
writeHTML5();
module.exports = writeHTML5;