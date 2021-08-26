const fs = require ('fs');
let jsonDeNotas = fs.readFileSync('./notas.json', 'utf-8');


let jsonAobjeto = JSON.parse(jsonDeNotas);

console.log (jsonAobjeto);

//let 