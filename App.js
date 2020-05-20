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

//lee todo los archivos de un Dir
fs.readdir("/home/devlop/Escritorio/",(err,files)=>{
    (err) ? console.log(err) : console.log("async",files);
});

//lee el contenido de un archivo
fs.readFile('App.js','utf-8', (err, data) => {
    (err) ? console.log('error: ', err) : console.log(data);
  });

  //Ordena los Dir alreves
  fs.readdir("./",(err,files)=>{
    (err) ? console.log(err) : console.log("Archivos Ordenados alreves",files.reverse())
});


//busca los directoriosp por la primera letra
fs.readdir("./",(err,files)=>{
    (err) ? console.log(err) : console.log("las encontre"),buscarPalabra(files,'A')
});

console.log("Sync",rootDir);

//para buscar una palabra y por su primer caracter
function buscarPalabra(palabra,letra){
    var cont = 0;
for(var i =0 ; i < palabra.length ;  i++){

    if(palabra[i] && palabra[i].charAt(0)===letra){
        cont++;
    };
};

console.log(cont);
}

