console.log( 'Hola mundo!!!' )

let entero = 10
let decimal = 10.12
let string = "Hola mundo"
let booleano = true

let fecha = new Date()
let nulo = null
let indefinido = undefined

console.log( entero )
console.log( decimal )
console.log( string )
console.log( booleano )
console.log( fecha )
console.log( nulo )
console.log( indefinido )


let array = [ 1, 2, 3, 4, 5 ]
console.log( array )

let arrayStr = [ "Hola", "Mundo", "Adios" ]
console.log( arrayStr )

let arrayMix = [ 1, "Hola", true, undefined, null, new Date() ]

console.log( arrayMix )

console.log( arrayMix[ 0 ] )

console.log( arrayMix[ 3 ] )


let objeto = {
  nombre: "Juan",
  edad: 30,
  casado: false,
  fechaNac: new Date(),
  saludar: function () {
    console.log( "Hola" )
  }
}


let recetaFavorita = {
  nombre: 'pizza',
  ingredientes: [ 'queso', 'harina', 'tomate', 'jamon' ],
  coccion: 45,
  napolitana: false
}



let josue = {
  nombre: "Josue",
  edad: 27,
  casado: false,
  fechaNac: new Date(),
  saludar: function ( saludo ) {
    console.log( saludo )
  },
  hobbies: [ "Leer", "Cantar", "Bailar" ]
}


let coldplay = {
  nombre: "Coldplay",
  integrantes: [ "Chris", "Guy", "Will", "Jonny" ],
  manager: {
    nombre: "Juan",
    edad: 30
  },
  discos: [
    {
      nombre: "Parachutes",
      anio: 2000
    },
    {
      nombre: "Mylo Xyloto",
      anio: 2011
    }
  ]
}


let diccionario = {
  hola: 'es un saludo tradicional en el idioma español',
  cinco: 'el quinto numero, de los numeros naturales ',
  telefono: 'dispositivo electronico que sirve para comunicarse'
}



let usuariosNuevos = {
  users: [ 'nuevo usuario 1', 'nuevo usuario 2', 'nuevo usuario 3' ]
}


let cancionesFavoritas = {
  canciones: [ 'viva la vida', 'clocks', 'fix you' ]
}


let cumpleanosMejoresAmigos = {
  amigos: [
    {
      nombre: 'Jhon',
      edad: 25,
      fecha: new Date(),
      comidaFav: 'pizza'
    },
    {
      nombre: 'Ale',
      edad: 23,
      fecha: new Date(),
      comidaFav: 'lomo saltado'
    },
    {
      nombre: 'Raul',
      edad: 28,
      fecha: new Date(),
      comidaFav: 'pollo a la brasa'
    }
  ]
}

// variable -> su valor puede cambiar -> lo puedo reasignar
let nombre = 'Josue'

console.log( nombre )

const LUGARNACIMIENTO = "Arequipa"


nombre = 'Patricio'

console.log( nombre )

// LUGARNACIMIENTO = 'Lima'


let juegoFav = 'God Of War'

const PI = 3.14159

console.log( 3 * PI )



let miNombre = 'Josue'

let mascotas = [ "Fido", "Bolita" ]

let miJuegoFavorito = `Mi juego favorito es: ${juegoFav}`
let miJuegoFav = 'Mi juego fav es:' + juegoFav

console.log( miJuegoFavorito )


let numeroCaracteres = miJuegoFavorito.length

console.log( numeroCaracteres )

console.log( miNombre.length )



let textoGrande = 'Mi DNI es : 1234567'

let primerDigito = textoGrande.charAt( 12 )
console.log( primerDigito )

let fraseCiudadDePapel = "HolA EStA es UNa FrAse RANdom"

let palabraCiudadesPapel = fraseCiudadDePapel.substring( 0, 4 )
console.log( palabraCiudadesPapel )
let miCaracter = fraseCiudadDePapel.charAt( 20 )
console.log( miCaracter )

let minusculas = fraseCiudadDePapel.toLowerCase()
let mayusculas = fraseCiudadDePapel.toUpperCase()

console.log( minusculas )
console.log( mayusculas )


let fraseCortada = fraseCiudadDePapel.slice( 17, 22 )
console.log( fraseCortada )



let incluyeFrase = textoGrande.includes( "DNI" )

console.log( incluyeFrase )


let cambioPalabra = textoGrande.replace( "DNI", "documento nacional de identidad" )

console.log( cambioPalabra )


//declarada
function multiplicar( a, b ) {
  return a * b
}

console.log( multiplicar( 2, 3 ) )

//expresion

const obternerPorcentaje = function ( impuestos ) {
  return `Tus impuestos son ${impuestos * 0.17}`
}

console.log( obternerPorcentaje( 1000 ) )


// flecha
const animarEquipoFavorito = ( equipo ) => {
  return `Que viva ${equipo} !!!?!`
}


let elBallenita = animarEquipoFavorito( 'El ballenita' )

//bucles

// for y while 

for ( let indice = 0; indice < 10; indice += 1 ) {
  console.log( `El indice es: ${indice}` )
}


for ( let i = 0; i < elBallenita.length; i++ ) {
  if ( elBallenita[ i ] === '!' ) {
    console.log( 'Hurra!!!' )
  } else if ( elBallenita[ i ] === '?' ) {
    break
  }
}

let numero = 0
// @ts-ignore
let random = parseInt( Math.random( 0, 10 ) * 100 )

console.log( random )
while ( numero != random ) {
  console.log( 'Bienvenidos!!!' )
  if ( numero === random ) {
    break
  }
  numero++;
}


for ( let i = 0; i < elBallenita.length; i++ ) {
  if ( elBallenita[ i ] === '!' ) {
    console.log( 'Hurra!!!' )
  } else if ( elBallenita[ i ] === '?' ) {
    console.log( '-----' )
    continue
  }
}


let n = 0

while ( n <= 21 ) {
  console.log( 'Hola mundo' )
  n += 3
}

let persona = {
  nombre: "raul",
  edad: 30
}

let persona2 = {
  apodo: "raul",
  edad: 30
}

let persona3 = {
  nickname: "raul",
  edad: 30
}


function devolverNombre( objeto = {
  nombre: 'nombre por defecto',
  edad: 0
} ) {
  return objeto?.nombre ?? 'NO HAY VALOR'
}


console.log( devolverNombre( persona ) )
// @ts-ignore
console.log( devolverNombre( persona2 ) )

// @ts-ignore
console.log( devolverNombre( persona3 ) )


// fizz buzz

// si un numero es multiplo de 3 imprime fizz y si el multiplo de 5 imprime buzz , y si es multiplo de 3 y 5 , imprime fizzbuzz

