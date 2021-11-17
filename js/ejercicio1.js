/*En un proyecto diferente o el mismo del crud crear una función que nos permita generar numero aleatorios unicos. Pueden probar que se creen números únicos agregándolos en un arreglo o simplemente con console.log*/

let arreglo =[];
let limite = 10



function random (){


do{
    let number = Math.floor(Math.random()*10)
  
    if(arreglo.includes(number)){
        console.log('ya existe')
        

       
    }else{arreglo.push(number)}


}while(limite>arreglo.length )

for(i=0;i<arreglo.length;i++){
  document.write(arreglo[i ] + '<br>' )
}
}


random()