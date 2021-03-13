// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var sum = array.map(function(x){
    return x + 1;
  })
  return sum;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:  
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numeros.reduce(reducer);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum = resultadosTest.reduce((previous, current) => current += previous);
  return sum / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:  
  return Math.max.apply(null,numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var res = 1;

  if(arguments.length === 1){
    res = arguments[0];
  }else if(arguments.length === 0){
    res = 0;
  }else{
    for(let i = 0; i < arguments.length; i++){
      res = res * arguments[i];
    }
  }
  return res;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let cuento=0;
  for(let i = 0; i < arreglo.length; i++)  {
    if(arreglo[i] > 19) cuento++;
  }
  return cuento;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let resultado = "";
  switch(numeroDeDia){
    case 1:
      resultado = "Es fin de semana";
      break;
    case 2:
      resultado = "Es dia Laboral";
      break;
    case 3:
      resultado = "Es dia Laboral";
      break;
    case 4:
      resultado = "Es dia Laboral";
      break;
    case 5:
      resultado = "Es dia Laboral";
      break;
    case 6:
      resultado = "Es dia Laboral";
      break;
    case 7:
      resultado = "Es fin de semana";
      break;
    default:
      resultado = "Es fin de semana";
      break;
  }
  return resultado;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí 
  let num = 0;
  if(n === 9)return true;

  if(n>9)num=n/10;

  return Math.trunc(num) === 9;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let todosIguales = false;
  for(let i = 0; i < arreglo.length; i++)  {
    if(arreglo[i] === arreglo[i + 1]) todosIguales = true;
  }
  return todosIguales;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let newArray = [];
  let cant = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Marzo"){newArray[cant] = "Marzo";cant++;}
    if(array[i] === "Noviembre"){newArray[cant] = "Noviembre";cant++;}
    if(array[i] === "Enero"){newArray[cant] = "Enero";cant++;}
  }
  let res = 0;
  for(let j = 0; j < 3; j++){
    if(newArray[j] === "Marzo")res++;
    if(newArray[j] === "Noviembre")res++;
    if(newArray[j] === "Enero")res++;
  }
  if(res===3){return newArray;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = [];
  let cant = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100){
      newArray[cant] = array[i];
      cant++;
    } 
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array = [];
  let res = false;
  for(let i = 0; i < 10; i++){    
    if(numero === i) {res = true; break;
    }else{ numero+=2; array[i] = numero;}
  }
  if(res) return "Se interrumpió la ejecución";
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  for(let i = 0; i < 10; i++){    
    if(i === 5){
      continue;      
    }else{
      numero = numero + 2;
      array.push(numero);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
