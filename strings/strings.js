// Strings

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

// b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

// c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

// d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

// e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

// f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio)Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

// a)

let upperCaseWord = "sobredosis";

// console.log(upperCaseWord.toUpperCase())

// b)

let wordToSubstring1 = "onomatopeya";
let substringWord1;

substringWord1 = wordToSubstring1.substring(0, 5);

// console.log(substringWord1);

// c)

let wordToSubstring2 = "onomatopeya";
let substringWord2;

substringWord2 = wordToSubstring2.substring(8,11);

// console.log(substringWord2);

// d)

let wordToCapitalize = "vacaciones";
let capitalizeWord;

capitalizeWord =
  wordToCapitalize.substring(0, 1).toUpperCase() +
  wordToCapitalize.substring(1, 10).toLowerCase();

// console.log(capitalizeWord);

// e)

let wordWithSpace = "nadari am os en el agua";
let wordToIndex;

wordToIndex = wordWithSpace.indexOf(" ");

// console.log(wordToIndex);

// f)

let twoWords = "abanderado acelerando";
let twoWordsCapitalize;

twoWordsCapitalize =
  twoWords.substring(0, 1).toUpperCase() +
  twoWords.substring(1, 11).toLowerCase() +
  twoWords.substring(11, 12).toUpperCase() +
  twoWords.substring(12, 23).toLowerCase();

// console.log(twoWordsCapitalize);

