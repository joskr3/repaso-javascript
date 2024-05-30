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

  let noDivisiblePorTresYCincoAlMismoTiempo = !( ( numero % 3 === 0 ) && ( numero % 5 === 0 ) )


  if ( numero % 3 === 0 && noDivisiblePorTresYCincoAlMismoTiempo ) {
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


function potencia( numero = 0, potencia = 0 ) {
  return numero ** potencia
}

const probarPotenciaDos = potencia( 2, 3 )
const probarPotenciaTres = potencia( 3, 2 )
const probarPotenciaCuatro = potencia( 4, 1 )

console.log( probarPotenciaDos )
console.log( probarPotenciaTres )
console.log( probarPotenciaCuatro )



// 3. Escribe una función que reciba dos números y devuelva el mayor.

// vamos a crear una funcion que reciba dos paramtros y me devuelva el mayor y el menor

// vamos aprobar con 2 y 5 , -9y0, 3.5,-1.7


const mayorYmenor = ( primerNumero = 0, segundoNumero = 0 ) => {
  let resultado = ''
  if ( primerNumero > segundoNumero ) {
    resultado = `El numero ${primerNumero} es  mayor entre -> ${primerNumero} y ${segundoNumero}`
  } else {
    resultado = `El numero ${segundoNumero} es  mayor entre -> ${primerNumero} y ${segundoNumero}`
  }
  resultado = `El numero ${segundoNumero} es  mayor entre -> ${primerNumero} y ${segundoNumero}`

  return resultado
}

const primeraPruebaMayorYmenor = mayorYmenor( 2, 5 )
const segundaPruebaMayorYmenor = mayorYmenor( -9, 0 )
const terceraPruebaMayorYmenor = mayorYmenor( 3.5, -1.7 )

console.log( primeraPruebaMayorYmenor )
console.log( segundaPruebaMayorYmenor )
console.log( terceraPruebaMayorYmenor )


let numeroStr1 = '1'

let numeroInt1 = 1

//primer caso
// @ts-ignore
if ( numeroStr1 === numeroInt1 ) {
  console.log( 'Son iguales' )
} else {
  console.log( ' No son iguales' )
}



//segundo caso
// @ts-ignore
if ( +numeroStr1 === numeroInt1 ) {
  console.log( 'Son iguales' )
} else {
  console.log( numeroStr1 )
  console.log( ' No son iguales' )
}


// 4. Escribe una función que reciba un array y devuelva el primer elemento par  y el tercer numero que sea impar

// primero , queremos crear una funcion que reciba , una serie de numeros , y devuelva aquel  primer numero que sea par y el tercer numero que sea impar

//vamos a probar con la siguiente lista de numeros 3,5,4,7,9,22,10

// ... numeros -> un array de numeros
function hallarElParEimpar( ...numeros ) {
  // declaro las variables donde guardare al primer numero par y al tercer numero impar
  let primerNumeroPar = 0, tercerNumeroImpar = 0 

  //declaro los contadores para saber cuantos numeros pares tengo y cuantos numeros impares
  let contadorNumerosPares = 0, contadorNumerosImpares = 0

  // el for of me permite recorrer un array de elementos de manera mas clara que si fuera con un for normal
  for ( const numero of numeros ) {
    // condicion para saber si un numero es par
    let par = numero % 2 === 0

    // condicion para saber si un numero es impar
    let impar = numero % 2 !== 0
    // primer caso , hallar el primer numero par

    if ( par ) {
      // solamentente si number es par , entonces el contador aumenta en 1
      contadorNumerosPares += 1 
      if ( contadorNumerosPares === 1 ) { 
        // solamente si el contador vale , es decir, es le primer elemento , entonces , guaradare a ese numero en primerNumeroPar
        primerNumeroPar = numero
      }
     }
    // segundo caso , hallar el tercer numero impar
    if (impar) {
      contadorNumerosImpares++
      if (contadorNumerosImpares === 3) { 
        tercerNumeroImpar = numero
      }
     }
  }
  // esto es un tupla {valor1,valor2,etc} y me permite devolver varios valores al mismo tiempo
  return {
    primerNumeroPar, tercerNumeroImpar
  }
}

const parEimpar = hallarElParEimpar( 6, 7, 1, 3, 45, 4 )

let respuesta = `El primer numero par es: ${parEimpar.primerNumeroPar} y el tercer numero impar es ${parEimpar.tercerNumeroImpar}`

console.log( respuesta)






