
// fizz buzz

// si un numero es multiplo de 3 imprime fizz y si el multiplo de 5 imprime buzz , y si es multiplo de 3 y 5 , imprime fizzbuzz


// vamos a prrobar los siguientes numeros : 3,5,15,20,22

// vamos a crear una funcion que reciba como parametro un numero y devuelva si es fizz(3) , buzz(5) y fizzbuzz si es (3y5)


function fizzbuzz( numero = 0 ) { 


  if ( ( numero % 3 === 0 ) && ( numero % 5 === 0 ) ) {
    return 'fizzbuzz'
  }
  //primer caso -> 3
  // si el numero es multiplo de 3 , entonces la funcion debera devolver(return) 'fizz'
  // una condicion es basicamente -> si....entonces....
  // if(aca dentro va la condicion que sera verdadera(true) o sera falsa(false)) {aca escribo el codigo que necesito}



  if (numero % 3 === 0) {
      return 'fizz'
   }

  //segundo caso -> 5
  // si el numero es multiplo de 5 , entonces la funcion debera devolver(return) 'buzz'
  if ( numero % 5 === 0 ) {
    return 'buzz'
  }

  //tercer caso -> 15
  // si el numero es multiplo de 5 , entonces la funcion debera devolver(return) 'fizzbuzz'
  
  

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


