// 6)Funciones
//   a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

//   b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

//   c)Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.

//   d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

//   e)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

// 6)
// a)

let resultado;

// function sumarNumeros(number1, number2) {
//   return resultado = number1 + number2;
// }

// sumarNumeros(2,16);

// console.log(resultado);

// b)

// function sumarNumeros(number1, number2) {
//   if (
//     isNaN(number1) ||
//     isNaN(number2) ||
//     number1 == "" ||
//     number2 == "" ||
//     typeof number1 == "string" ||
//     typeof number2 == "string"
//   ) {
//     alert("Uno de los parametros tiene error"), (resultado = "NaN");
//   } else {
//     resultado = number1 + number2;
//   }
// }
// sumarNumeros(12, 25);

// console.log(resultado);

// c)

// function valiteInteger1(number){
//     if(Number.isInteger(number)){
//         return true;
//     } else{
//         return false;
//     }

// }

// console.log(valiteInteger1(3))

// d)

// function sumarNumeros(number1, number2) {
//       if (
//         isNaN(number1) ||
//         isNaN(number2) ||
//         number1 == "" ||
//         number2 == "" ||
//         typeof number1 == "string" ||
//         typeof number2 == "string"
//       ) {
//         alert("Uno de los parametros tiene error"), (resultado = "NaN");
//       } else if(!Number.isInteger(number1) || (!Number.isInteger(number2))) {
//         return alert('Error'),
//         resultado = parseInt(number1 + number2)
//       }else{
//           resultado = number1 + number2;
//       }
//     }
//     sumarNumeros(12, 24);

//     console.log(resultado);

// e)

// function sumarNumeros(number1, number2) {
//   IsNotNumber(number1, number2)
// }

// sumarNumeros( 12, 12);

// console.log(resultado);

// function IsNotNumber(number1, number2) {
//   if (
//     isNaN(number1) ||
//     isNaN(number2) ||
//     number1 == "" ||
//     number2 == "" ||
//     typeof number1 == "string" ||
//     typeof number2 == "string"
//   ) {
//     alert("Uno de los parametros tiene error"), (resultado = "NaN");
//   } else {
//     resultado = number1 + number2;
//   }
// }
