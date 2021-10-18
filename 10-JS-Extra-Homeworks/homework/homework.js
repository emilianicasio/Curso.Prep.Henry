// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arrayExterior = [];
  const array = Object.keys(objeto); // ['a','b','c']

  for (let i = 0; i < array.length; ++i) {
    const clave = array[i];
    const value = objeto[clave];
    let arrayInterior = [];
    arrayInterior.push(clave);
    arrayInterior.push(value);
    arrayExterior.push(arrayInterior);
  }
  return arrayExterior;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let nuevoObjeto = {};
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    if (Object.keys(nuevoObjeto).includes(key)) {
      nuevoObjeto[key] = nuevoObjeto[key] + 1;
    } else {
      nuevoObjeto[key] = 1;
    }
  }
  return nuevoObjeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = [];
  let minusculas = [];
  let string = s;
  for (let i = 0; i < s.length; ++i) {
    if (s[i].toUpperCase() === s[i]) { // la letra es mayuscula
      mayusculas.push(string[i]);
    } else {
      minusculas.push(string[i]);
    }
  }
  return mayusculas.join('') + minusculas.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = [];
  let string = "";
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === " ") {
      string = string + array.join('') + str[i];
      array = [];
    } else {
      array.unshift(str[i]);
      if (i === str.length - 1) {
        string = string + array.join('');
      }
    }
  }
  return string;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  const numeroString = numero.toString();
  let esCapicua = true;
  for (let i = 0; i < numeroString.length; ++i) {
    if (numeroString[i] !== numeroString[numeroString.length - 1 - i]) {
      esCapicua = false;
    }
  }
  if (esCapicua) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let newCadena = cadena;
  for (let i = 0; i < cadena.length; ++i) {
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c') {
      newCadena = newCadena.replace(cadena[i], '');
    }
  }
  return newCadena;
}




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort((a, b) => a.length - b.length);

}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let comun = [];
  const arr1 = arreglo1.toString();
  const arr2 = arreglo2.toString();
  for (i = 0; i < arr1.length; ++i) {
    for (j = 0; j < arr2.length; ++j) {
      if (arr1[i] === arr2[j] && !(comun.includes(+arr1[i]))) {
        comun.push(+arr1[i]);
      }
    }
  }
  return comun;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

