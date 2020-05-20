const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');


//let pathObj = path.parse(__filename);

//logger.log(pathObj);


let freeMen = os.freemem();
let totalMemory = os.totalmem();

console.log("freeMen: ",freeMen);
console.log(" total memory: ", totalMemory);

let rootDir = fs.readdirSync("./");


fs.readdir("./",(err,files)=>{
    (err) ? console.log(err) : console.log("async",files);
    
    
});

console.log("Sync",rootDir);









