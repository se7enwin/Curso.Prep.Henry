// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var x, y;
  if (x>=y) {
    return x;}
    if (x<=y) {
      return y;
    }
    
  
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var Allowed='Allowed';
  var NotAllowed='Not allowed';
  
  if (edad>=18) {
    return Allowed;
  }
  if (edad<18) {
    return NotAllowed;
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
var online='Online';
var away='Away';
var offline='Offline';
if (status===1) {
  return online; 
}
if (status===2) {
  return away;
}
return offline;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!"
  // Tu código:
  var aleman='Guten Tag!';
  var mandarin='Ni Hao!';
  var ingles='Hello!';
  var ninguno='Hola!';
  if (idioma==='aleman') {
    return aleman;
  }
  if (idioma==='mandarin') {
    return mandarin;
  }
  if (idioma==='ingles') {
    return ingles;
  }
  return ninguno;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var blue='This is blue';
  var red='This is red';
  var green='This is green';
  var orange='This is orange';
  var not='Color not found';



  switch (color) {
    case 'blue':
      return blue;
      break;
    case 'red':
      return red;
      break;
    case 'green':
      return green;
      break;
    case 'orange':
      return orange;
      break;
    default:
      return not;
      break;
  }
  

}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
 if (numero===10|numero===5) {
  return true;
 }
 return false;

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50&numero>20) {
    return true; 
      false
    
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  

  var first=numero;
  var second=numero;
  first=Math.floor(first);

  if (numero===0) {
    return true;
  }
  if (Math.floor(numero)===0) {
    return false;
  }
  if (second===first) {
    
    return true;
  }
  return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
var numero2=numero;
var fizz=('fizz');
var buzz=('buzz');
var fizzbuzz=('fizzbuzz');

if (((numero%3)===0)&&((numero%5)===0)) {
    return fizzbuzz; }  
if ((numero%3)===0) {
return fizz; }
if ((numero%5)===0) {
  return buzz;
} 
return numero;


}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var positivo='Número 1 es mayor y positivo';
  var cero='Error';
  var negativo='Hay negativos';
  var nuevo;

  if ((num1===0)||(num2===0)||(num3===0)) {
    return cero;
  }
  if ((num1>num2)&&(num1>num3)&&((num1>0)&&(num2>0)&&(num3>0))) {
    return positivo;
  }
  if ((num1<0)||(num2<0)||(num3<0)) {
    return negativo;
  }
  if ((num3>num1)&&(num3>num2)) {
    return nuevo=(++num3); }
    return false;

} 

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  contador=0;
  if (((numero===0) || (numero===1)))
  {
  return false; 
  }
  //<9007199254740911
  for (var i=1; i<1000; i++ )
  {
    divisible=((numero)/(i));
    divisible2=((numero)%(i));
    
      
       if ((divisible2)===(0))
     {
      // console.log ('Es divisible');
       contador=contador+1;
     }
     
    if (contador>2) {
          
          return false;
          
    }
    
    if (i>=999) {
      return true;
  }
    
  }

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
var verdadero='Soy verdadero';
var falso='Soy falso';
if (valor==true) {
  return verdadero;}
if (valor==false) {
  return falso;
}    

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  muestra = new Array;
for (var i = 0; i < 11; i++) {
   
   	  muestra[i] = muestra[i] = (i*6);
	  
	   
     if (i>9) {
		 
		 return (muestra);
	 }
  }  

}  
 

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var digitos;

  if ((numero>=100)&&(numero<=999)) {

    return true;
  }
    return false;


  
}
function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
  var cinco=5;
  i=0;
   do {

    numero=((numero)+(cinco));
   
  i=i+1;
   if (i===8) {
	   return (numero);
	   
   }
   
  } while (i<8);


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
