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
let nomes = ['a','b'];
function concatName(nomes) {
  // seu código aqui
  let resultado= [];
  for (let index = 0; index < nomes.length; index += 1){
  if(index === 0){
resultado = nomes[index]
}else if (index === nomes.length){
  resultado.push(nomes[index])
}else {
  resultado = 0
}
return resultado
}
}
console.log(concatName(nomes))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
