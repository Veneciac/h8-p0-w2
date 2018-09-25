
// NO 1
console.log('looping pertama');
var a = 2;
while(a <=20)
{
  console.log( a + ' - I love coding');
  a+=2;
}
console.log('looping kedua');
var b = 20;
while( b>=2){
  console.log(b + ' - I will become fullstack developer');
  b-=2;
}

// NO 2
console.log('Looping pertama')
for(var a= 1; a<=20;a++){
  console.log(a + ' - I love coding.')
}
console.log('Looping kedua')
for(var b= 20; b>=1; b--){
  console.log(b +' - I will become fullstack developer.')
}

//NO 3
//A
for(var a=1; a<=100; a++){
  if( a%2==0){ 
    console.log('GENAP')
  }else{
    console.log('GANJIL')
  }
}

//B
for(var b=1; b<=100; b+=2){
  if (b%3==0){
    console.log(b+' KELIPATAN 3')
  }else{
    console.log('')
  }
}

//C 
for(var c=1; c<=100; c+=5){
  if(c%6==0){
    console.log(c+' KELIPATAN 6')
  }else 
  console.log('')
}

//D
for(var d=1; d<=100; d+=9){
  if(d%10==0){
    console.log(d +' KELIPATAN 10')
  }else {
    console.log('')
  }
}