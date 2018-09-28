//EXERCISE 13

//Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  
  var x= 0
  var o= 0
  for(var i=0; i<=str.length;i++){
    //console.log(str[i])
    if (str[i]=== 'x'){
      x +=1
    }else if(str[i]){
      o+=1
    }
    else{
      ''
    }
  }
  if(x === o){
    return true
  }else{
    return false
  }
  
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true