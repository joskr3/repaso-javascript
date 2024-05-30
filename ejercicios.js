//  1. fizz buzz

// si un numero es multiplo de 3 imprime fizz y si el multiplo de 5 imprime buzz , y si es multiplo de 3 y 5 , imprime fizzbuzz


// vamos a probar los siguientes numeros : 3,5,15,20,22

// vamos a crear una funcion que reciba como parametro un numero y devuelva si es fizz(3) , buzz(5) y fizzbuzz si es (3y5)


function fizzbuzz( numero = 0 ) { 
  //primer caso -> 3
  // si el numero es multiplo de 3 , entonces la funcion debera devolver(return) 'fizz'
  // una condicion es basicamente -> si....entonces....
  // if(aca dentro va la condicion que sera verdadera(true) o sera falsa(false)) {aca escribo el codigo que necesito}
  // necesito asegurarme que solamente el numero sera divisible por 3 , y no por 5 y 3 al mismo tiempo

  let noDivisiblePorTresYCincoAlMismoTiempo = !( ( numero % 3 === 0 ) && ( numero % 5 === 0 )  ) 


  if (numero % 3 === 0 && noDivisiblePorTresYCincoAlMismoTiempo) {
      return 'fizz'
   }

  //segundo caso -> 5
  // si el numero es multiplo de 5 , entonces la funcion debera devolver(return) 'buzz'
  if ( numero % 5 === 0 && noDivisiblePorTresYCincoAlMismoTiempo ) {
    return 'buzz'
  }

  //tercer caso -> 15
  // si el numero es multiplo de 5 , entonces la funcion debera devolver(return) 'fizzbuzz'
  

  if ( ( numero % 3 === 0 ) && ( numero % 5 === 0 ) ) {
    return 'fizzbuzz'
  }

}


const probarTres = fizzbuzz( 3 ) // deberia mostrar en la terminal -> fizz
const probarCinco = fizzbuzz( 5 ) // deberia mostrar en la terminal -> buzz
const probarQuince = fizzbuzz( 15 ) // deberia mostrar en la terminal -> fizzbuzz

const probarVeinte = fizzbuzz( 20 ) // deberia mostrar en la terminal -> buzz

const probarVeintidos = fizzbuzz( 22 ) // deberia mostrar en la terminal -> NADA

console.log( probarTres )
console.log( probarCinco )
console.log( probarQuince )
console.log( probarVeinte )
console.log( probarVeintidos )


// otra manera de hacerlo 

// let numb = 1;

// while ( numb < 101 ) {
//   ( numb % 3 === 0 && !( numb % 3 === 0 && numb % 5 === 0 ) && console.log( 'Fizz \n', numb ) ) ||
//     ( numb % 5 === 0 && !( numb % 3 === 0 && numb % 5 === 0 ) && console.log( 'Buzz\n', numb ) ) ||
//     ( numb % 3 === 0 && numb % 5 === 0 && console.log( 'FizzBuzz\n', numb )
//     )
//   numb++
// }


// 2.Escribe una función que reciba un número y devuelva su cuadrado.

// vamos acrear una funcion , que reciba como parametro un numero y devuleva el resultado

// vamos aprobar con 2,3,4
// si pruebo con 2 , deberia esperar 4
// si pruebo con 3, deberia esperar 9
// si pruebo con 4, deberia esperar 16


function cuadrado( numero = 0 ) { 
  return numero ** 2
}

const probarCuadradoDos = cuadrado( 2 )
const probarCuadradoTres = cuadrado( 3 )
const probarCuadradoCuatro = cuadrado( 4 )

console.log( probarCuadradoDos )
console.log( probarCuadradoTres )
console.log( probarCuadradoCuatro )


// ahora con la potencia (n)


function potencia( numero = 0, potencia=0 ) {
  return numero ** potencia
}

const probarPotenciaDos = potencia( 2,3 )
const probarPotenciaTres = potencia( 3,2 )
const probarPotenciaCuatro = potencia( 4,1 )

console.log( probarPotenciaDos )
console.log( probarPotenciaTres )
console.log( probarPotenciaCuatro )








