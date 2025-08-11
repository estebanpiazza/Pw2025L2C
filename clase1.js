const { LucideFolderMinus } = require("lucide-react");

/* Javascript: variables, tipos de datos (variable, constante, array, objeto), array de objetos, operadores logicos(&& ||), aritmeticos(<>) y matematicos(+- * / ) parseo de datos,thurty y flasy
 */
"hola"
let nombre = "Esteban"; // string
let edad = 1 // Number
console.log(nombre,edad) // print
let = true // boolean

const EDAD = 32
EDAD = EDAD + 1

let array1 = [1,2,3]
console.log(array1[0])

const ARRAY2 = ["Esteban",1,true]
ARRAY2.push("hola") // append

console.log(ARRAY2)

let perro_Violeta = {
    nombre : "tai",
    edad: 11,
    vivo: true,
    cumplirAnios: function (){
        this.edad + 1
    },
}
console.log(perro_Violeta.nombre)

let perro_Maggie={
    nombre: "Simon",
    edad: 4,
    vivo: true,
}
let perro_Rocio={
    nombre:"Mailo",
    edad: 3,
    vivo: true
}

const PERROS = [
perro_Violeta,perro_Maggie,perro_Rocio
]

console.log(PERROS[1].nombre)

//operadores matematicos y arimeticos

console.log(1+2) //sumar
console.log(2-1) //restar
console.log(2*2) //multiplicar
console.log(10/2) //dividir
console.log(2**3) //potencia
console.log(10%2)//division por resto

console.log(1<2)//menor
console.log(2>2)//mayor
console.log(2>=2)//mayor igual
console.log(2<= 2)//menor igual
console.log("2"==2) // igualdad debil compara solo el valor
console.log("2"=== 2) // igualdad estricta compara el valor y el tipo de dato
console.log(3 != 2) // diferencia
console.log("3" !== 3) //diferencia estricta


edad3 = "12"
let edad_numerica = parseInt(edad3)
console.log(typeof(edad_numerica))
