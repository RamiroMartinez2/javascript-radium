// 4) If Else
//   a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
//   b)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// i) “Bebe” si la edad es menor a 2 años
// ii) “Nino” si la edad es entre 2 y 12 años
// iii) “Adolecente” si la edad es entre 13 y 19 años
// iv)  “Joven” si la edad está entre 20 y 30 años
// v)  “Adulto” entre 31 y 60 años
// vi)  “Adulto mayor” entre 61 y 75 años
// vii)  “Anciano” si es mayor a 75 años

// 4)
// a)

let randomNumber = Math.random(0, 1);

// console.log(randomNumber);

// if(randomNumber >= 0.5){
//     alert('Greater than 0,5');
// } else {
//     alert('Lower than 0,5');
// }

// b)

// let age = 2;

// i)

// if(age < 0 || age > 100) {
// alert('No se encuentra entre el rango permitido');
// }else if (age < 2) {
//   alert("Bebe");
// } else

// // ii)

// if (age >= 2 && age <= 12) {
//   alert("Niño");
// }else

// // iii)

// if (age >= 13 && age <= 19) {
//   alert("Adolescente");
// }else

// //iv)

// if (age >= 20 && age <= 30) {
//   alert("Joven");
// }else

// //v)

// if (age >= 31 && age <= 60) {
//   alert("Adulto");
// }else

// //vi)

// if (age >= 61 && age <= 75) {
//   alert("Adulto mayor");
// }else

// //vi)

// if (age > 75) {
//   alert("Anciano");
// }