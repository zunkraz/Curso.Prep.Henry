// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const array = Object.entries(objeto);
  return array; 
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const objeto = {}
  for(let i = 0; i< string.length ; i++){
      if(objeto[string[i]] === undefined){
          objeto[string.charAt(i)] = 1;  
      }else{
          objeto[string.charAt(i)] =  objeto[string.charAt(i)] +1;
      }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const arrayMinus = [];
  const arrayMayus = [];

  for(let i = 0; i< s.length ; i++){
    if(s[i] === s[i].toUpperCase()){
        arrayMayus.push(s[i]);
    }
    if(s[i] === s[i].toLowerCase()){
        arrayMinus.push(s[i]);
    }
    }
s = arrayMayus.concat(arrayMinus).join('');
return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  str = str.split(' ');
  for(let i = 0; i < str.length; i++){
      str[i] = str[i].split('').reverse().join('');
  } 
  str = str.join(' ')
  return str;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroCap = parseFloat(numero.toString().split('').reverse().join(''));
  if(numero === numeroCap){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
   cadena= cadena.toLowerCase().replace('a','').replace('b','').replace('c','');
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
const fn = arr.sort((a,b) => a.length - b.length)
return fn;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arregloX;
  let arregloS;
  if(arreglo2.length< arreglo1.length){
       arregloX = arreglo2;
       arregloS= arreglo1;
  }else{
        arregloX = arreglo1;
        arregloS = arreglo2;
  }
  const newArray = [];
  for(let j= 0; j < arregloX.length ; j++){
      if(arregloS.includes(arregloX[j]) && !newArray.includes(arregloX[j])){
          newArray.push(arregloX[j]);
      }
  }
  return newArray;
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

