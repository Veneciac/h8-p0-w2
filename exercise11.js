//EXERCISE 11 BALIK KATA
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

//CARA 1
function balikKata(kata) {
  var a='';
  for(var i =kata.length-1; i>=0; i-- ){
    a+= kata[i]
  }
  return a
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


// CARA 2

function balikKata(kata) {
  var a= kata.length-1;
  var i =''
  while (a>=0){
    i = i+ kata[a];
    a--;
  }
  return i
}
