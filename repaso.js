
let holaMundo = "Hola mundo" // tipo texto
console.log( holaMundo )

let numeroDeAmigos = 1000 //tipo numero
console.log( numeroDeAmigos )

let esUnaCancionFamosa = true// tipo booleano -> true o false
console.log( esUnaCancionFamosa )

let indefinido2 = undefined
console.log( indefinido2 )

let valorNulo = null
console.log( valorNulo )


const lugarNacimiento = 'Paris'
console.log( lugarNacimiento )

const PI2 = 3.1416
console.log( PI2 )


let arrayDeNumeros = [ 1, 2, 3, 4, 5, 6, 7 ]
console.log( arrayDeNumeros )

let arrayDeTextos = [ 'el1', 'el2', 'el3' ]

let arrayDeVictorias = [ true, true, false, false, false, true, true ]

let arrayMixto = [ 1, 2, 3, 'el4', 'el5', 'el6', true, false, false, undefined, undefined, null ]


let objetoSimple = {
  llave: 'valor',
  llave2: 15,
  llave3: true,
  llave4: undefined,
  llave5: null,
  llave6: [ 1, 2, 3, null, undefined, 'valor1', [ true, false, false, true ] ],
  llave7: {
    subllave1: 'subvalor1',
    subllave2: 2,
    subllave3: false
  }
}

for ( let indice = 0; indice < 10; indice = indice + 1 ) {
  console.log(indice)
}

console.log('#################################')
let arrayDesdeObjeto = objetoSimple.llave6

for ( let indice = 0; indice < arrayDesdeObjeto.length; indice++) { 
  console.log(arrayDesdeObjeto[indice])
}
console.log( '#################################' )

for (const elemento of arrayDesdeObjeto) {
    console.log(elemento)
}

let numeroDesdeObjeto = objetoSimple.llave2
let contador = 0
while ( contador <= numeroDesdeObjeto ) { 
  console.log( contador )
  contador++
}

console.log( '##############################' )

// @ts-ignore
let adivinarNumero = 20
let random2 = 0
let numeroDeIntentos = 0

while (adivinarNumero !== random2) { 
  // @ts-ignore
  random2 = parseInt( Math.random( 0, 10 ) * 100 )
  numeroDeIntentos++
  //console.log( random2 )
}
console.log(`El numero de intentos fue : ${numeroDeIntentos}`)

function saludarAmigos (saludo='') { 
  return `Hola, este es mi saludo : ${saludo}`
}
const saludame = saludarAmigos( 'Uwu' )
const nuevoSaludo = saludarAmigos('Hey hey hey !!')

console.log( saludame )
console.log( nuevoSaludo )

const adivinarNumero2 = ( numero = 0, random = 0, numeroIntentos = 0 ) => { 
  while ( numero !== random ) {
    // @ts-ignore
    random = parseInt( Math.random( 0, 10 ) * 100 )
    numeroIntentos++
  }
  let resultadoIntentos = `El numero de intentos fue : ${numeroIntentos}`
  return resultadoIntentos
}

console.log( adivinarNumero2( 5 ) )
console.log( adivinarNumero2( 5 ) )
console.log( adivinarNumero2( 5 ) )
console.log( adivinarNumero2( 5 ) )

function adivinarNumero3( numero = 0, random = 0, numeroIntentos = 0 ) { 
  while ( numero !== random ) {
    // @ts-ignore
    random = parseInt( Math.random( 0, 10 ) * 100 )
    numeroIntentos++
  }
  let resultadoIntentos = `El numero de intentos fue : ${numeroIntentos}`
  return resultadoIntentos
}
console.log( '##############################' )


console.log( adivinarNumero3( 7) )
console.log( adivinarNumero3( 2 ) )
console.log( adivinarNumero3( 3 ) )
console.log( adivinarNumero3( 54 ) )

