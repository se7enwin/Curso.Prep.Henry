// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str; // "Return" la string provista: str
  // Tu código:
  
}

function suma(x, y) {
   var x, y, z; // "x" e "y" son números
  z=(x+y); // Suma "x" e "y" juntos y devuelve el valor
  return z; // Tu código:
  
}

function resta(x, y) {
  var x,y,z; // Resta "y" de "x" y devuelve el valor
  z=(x-y); // Tu código:
  return z;
}

function multiplica(x, y) {
  var x,y,z; // Multiplica "x" por "y" y devuelve el valor
  z=(x*y);// Tu código:
  return z;
}

function divide(x, y) {
  var x,y,z; // Divide "x" entre "y" y devuelve el valor
  z=(x/y)// Tu código:
  return z;
}

function sonIguales(x, y) {
  if (x===y) {return true; }// Devuelve "true" si "x" e "y" son iguales
  return false;// De lo contrario, devuelve "false"
} // Tu código:
  


function tienenMismaLongitud(str1, str2) {
  if (str1.length===str2.length) {return true; } // Devuelve "true" si las dos strings tienen la misma longitud
  return false; // De lo contrario, devuelve "false"
  // Tu código:
  
}

function menosQueNoventa(num) {
  if (num<90) {return true;}// Devuelve "true" si el argumento de la función "num" es menor que noventa
  return false; // De lo contrario, devuelve "false"
  // Tu código:
  
}

function mayorQueCincuenta(num) {
  if (num>50) {return true;}// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  return false;// De lo contrario, devuelve "false"
  // Tu código:
  
}

function obtenerResto(x, y) {
  var x,y,z;// Obten el resto de la división de "x" entre "y"
  z=(x%y);   // Tu código:
  return z;
}

function esPar(num) {
  if (num%2===0) {return true; }// Devuelve "true" si "num" es par
  return false;// De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
  if (num%2!=0) {return true; }// Devuelve "true" si "num" es impar
  return false; // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) {
  var z;
  z=(Math.pow(num , 2));// Devuelve el valor de "num" elevado al cuadrado
  return z;// ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {
  var z;
  z=(Math.pow(num , 3)); // Devuelve el valor de "num" elevado al cubo
  return z; // Tu código:
  
}

function elevar(num, exponent) {
  var z;
  z=(Math.pow(num , exponent)); // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return z; // Tu código:
  
}

function redondearNumero(num) {
  var z;// Redondea "num" al entero más próximo y devuélvelo
  z=Math.round (num);// Tu código:
  return z;
}

function redondearHaciaArriba(num) {
  var z; // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  z=Math.ceil (num);// Tu código:
  return z;
}

function numeroRandom() {
  var z; //Generar un número al azar entre 0 y 1 y devolverlo
  z=Math.random();//Pista: investigá qué hace el método Math.random()
  return z;
}

function esPositivo(numero) {
  var p=('Es positivo'); n=('Es negativo'); //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  if (numero>0) {return p};//Si el número es positivo, devolver ---> "Es positivo"
  if (numero<0) {return n};//Si el número es negativo, devolver ---> "Es negativo"
  return false;//Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
  var exc=('!'); var z;// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  z=(str + exc); // Ejemplo: "hello world" pasaría a ser "hello world!"
  return z; // Tu código:
}

function combinarNombres(nombre, apellido) {
  var nombres;// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  nombres= (nombre+ ' ' +apellido);// Ejemplo: "Soy", "Henry" -> "Soy Henry"
  return nombres; // Tu código:
  
}

function obtenerSaludo(nombre) {
  var saludo;// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  saludo=('Hola ' + nombre+'!');// "Martin" -> "Hola Martin!"
  return saludo;// Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  var z; z=(alto*ancho)// Retornar el area de un rectángulo teniendo su altura y ancho
  return z; // Tu código:
  
}


function retornarPerimetro(lado){
  var z; //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  z=(lado*4);//Escribe tu código aquí
  return z;
}


function areaDelTriangulo(base, altura){
  var z; z=(base * altura / 2);//Desarrolle una función que calcule el área de un triángulo.
  return z;//Escribe tu código aquí

}


function deEuroAdolar(euro){
  var z; z=(euro*1.20)//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  return z;//como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  var esvocal='Es vocal'; 
  var dato='Dato incorrecto';
  if
  (letra.length>1) {return dato}; if
  (letra==='a') {return esvocal}; if
  (letra==='e') {return esvocal}; if
  (letra==='i') {return esvocal}; if
  (letra==='o') {return esvocal}; if
  (letra==='u') {return esvocal}; if
  (letra!='a', letra!='e', letra!='i', letra!='o', letra!='u' ) {return dato}; 

  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
