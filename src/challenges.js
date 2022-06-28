// Desafio 1
function compareTrue(param1,param2) {
  // seu código aqui
  if(param1 === true && param2 === true){
    return true
  } else {
    return false
  }
}
let macaco = true 
let elefante = false
console.log (compareTrue(macaco,elefante))


// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  let area = base * altura / 2
return area
}
console.log(calcArea(10,20))


// Desafio 3
let txt = ''
function splitSentence(txt) {
  // seu código aqui
 let x = txt.split(" ");
return x
}
console.log(splitSentence(txt))


// Desafio 4
function concatName(nomes) {
  // seu código aqui
let resultado = nomes.at(-1) + ', ' + nomes.at(0)
return resultado
}

console.log(concatName(["a","b"]))


// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
let w = wins * 3
let t = ties * 1
let resultado = w + t
return resultado
}
console.log(footballPoints(2,4))

// Desafio 6
let test = [9, 1, 2, 3, 9, 5, 7]
function highestCount(test) {
  // seu código aqui
let numeroMaiorSeRepete = -3;
  for (let i = 0;i <= test.length; i += 1){
    if(test[i] > numeroMaiorSeRepete){
      numeroMaiorSeRepete = test[i]
    }
  };
  let conta = 0
  for(let i = 0; i <= test.length; i += 1 ) {
    if(test[i] === numeroMaiorSeRepete) {
      conta += 1
    } 
  }
return conta
}
console.log(highestCount(test))

// Desafio 7

function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
