var name ='Tom'
var role ='Penyihir'
var welcome= 'Selamat datang di Dunia Proxytia, '+ name +'.'
var descksatria = '\n Halo Ksatria '+ name +', kamu dapat menyerang dengan senjatamu!'
var desctabib ='\n Halo Tabib ' + name +', kamu akan membantu temanmu yang terluka.'
var descpenyihir='\n Halo Penyihir ' + name +', ciptakan keajaiban yang membantu kemenanganmu!'

if (name =='' && role==''){
  console.log( 'Nama harus diisi!')
}else if( name=='Tom' && role== ''){
  console.log('Hello ' + name +', Pilih peranmu untuk memulai game.')
} else if ( name=='Tom' && role=='Ksatria'){
  console.log(welcome + descksatria)
}else if (name=='Tom' && role=='Tabib'){
  console.log( welcome + desctabib)
}else if( name =='Tom' && role =='Penyihir'){
  console.log(welcome + descpenyihir)
}

