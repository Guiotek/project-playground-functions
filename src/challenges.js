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
let r = nomes[0]
let j = nomes.length -1
let r1 = nomes[j] 
let resultado = r1 + r
let i = ""
i = i.concat(r1,', ',r)
return i
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
let test = [9, 1, 2, 3, 9, 5, 7]
console.log(highestCount(test))

// Desafio 7

function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  if(cat1 + 1 === mouse && cat2 -1 === mouse){
    return "os gatos trombam e o rato foge"
  } else if(cat1 > cat2){
    return "cat2"
  } else if(cat2 > cat1) {
    return "cat1"
  } 
}
console.log(catAndMouse(0,3,2))

// Desafio 8
function fizzBuzz(param) {
  // seu código aqui
  let a = []
  for(let i = 0 ; i < param.length ; i += 1){
    let contar = param[i] /3
    let contar2 = param[i] /5
    let r = Number.isInteger(contar)
    let r2 = Number.isInteger(contar2)
    if(r === true && r2 === true) {
     a.push("fizzBuzz")
    } else if (r === true ){
      a.push("fizz")
    } else if (r2 === true){
      a.push("buzz")
    } else {
      a.push("bug!")
    }
  }
  return a
}
console.log(fizzBuzz([9, 25]))

// Desafio 9
function encode(p) {
  // seu código aqui
  let palo = p
  
  for (let i = 0;i < palo.length ;i += 1){
    if(palo[i] == 'a'){
      palo = palo.replace(/a/g,'1')
    }else if (palo[i] == 'e'){
      palo = palo.replace(/e/g,'2')
    }else if (palo[i] == 'i'){
      palo = palo.replace(/i/g,'3')
    }else if (palo[i] == 'o'){
      palo = palo.replace(/o/g,'4')
    }else if (palo[i] == 'u'){
      palo = palo.replace(/u/g,'5')
    }
  }
return palo
}
console.log(encode("hello"))
function decode(p21) {
  // seu código aqui
  let pala = p21
  for (let i = 0;i < pala.length ;i += 1){
    if(pala[i] == '1'){
      pala = pala.replace(/1/g,'a')
    }else if (pala[i] == '2'){
      pala = pala.replace(/2/g,'e')
    }else if (pala[i] == '3'){
      pala = pala.replace(/3/g,'i')
    }else if (pala[i] == '4'){
      pala = pala.replace(/4/g,'o')
    }else if (pala[i] == '5'){
      pala = pala.replace(/5/g,'u')
    }
  }
return pala
}
console.log(decode("h2ll4"))
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
