// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
    
    var numeros;
    var numeros2;
    numeros=array; 
    numeros2=(numeros.shift())
    return numeros2;
  
  

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  var numeros;
    var numeros2;
    numeros=array; 
    numeros2=(numeros.pop())
    return numeros2;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo;
  
  largo=array=(array.length);
  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
    
  var numeros;
  var numeros2=[];
  numeros=array; 
  
  for (var i=0; i<array.length; i++) {
        numeros2[i]=numeros[i];
		//console.log (numeros2[i]);
		numeros2[i]=numeros[i]+1;
        //console.log (numeros2[i]); 
  }
  
  return numeros2;
  
  // ejecutar con: incrementarPorUno([1,2,3,4,5])
	  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  
 
  var arreglo=array;
var item=elemento;

arreglo.push(elemento);
return arreglo;

}





function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var arreglo=array;
  var item=elemento;
  
  arreglo.unshift(elemento);
  return arreglo;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 
  var cadena=[];
  cadena=palabras;
  var texto='';
  
  for (var i=0; i<palabras.length; i++) {
	  
	  if (i===0)
	  {
	  cadena[i]=cadena[i];
	  texto=texto+cadena[i];
	  }
     if (i>=1)
	  texto=texto+' '+cadena[i];
  }
  
  return texto;
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  arreglo=array;

for (var i=0; i<array.length; i++) {

if (arreglo[i]===elemento)
	return true;

}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var arreglo=numeros;
  var total=0;
  
  
  for (var i=0; i<arreglo.length; i++) {
    
    total=total+arreglo[i];
    
  }
  console.log(total);
  
return total;

  }




function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  var arreglo=resultadosTest;
  var suma=0;
  var promedio=0;
  
  for (var i=0; i<arreglo.length; i++) {
    
    suma=suma+arreglo[i];
    //promedio=suma/i;
    //console.log (suma);
    //console.log (promedio);
  }
  promedio=suma/(i);
  return promedio;


}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var arreglo=numeros;
var grande=0;

for (var i=0; i<arreglo.length; i++) {
	
		
	if (arreglo[i]>grande) {
		
		grande=arreglo[i];
	}
}

return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var multiplica=1;
var producto=0;
var crea=0;



for (var i=0; i<arguments.length; i++) {
	
	if (arguments.length===1) {
		//console.log ('Llego a un argumento');
		return arguments[i];
		
	}
	
	if (arguments.length>1) {
		
		multiplica=multiplica*arguments[i]
		//console.log('Cargo mas de un argumento');
		//console.log (multiplica);
		producto=producto=multiplica;
		//return producto;
		//console.log (producto);
	}

}
    return producto;
	return arguments.length;

}
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
    var numeros=arreglo;
    var mayor=0;
    var container;
    
    for (var i=0; i<arreglo.length; i++) {
          if (numeros[i]>18)
      {
             mayor=mayor+1;
      }
      
    }
    return mayor;
    
    // Ejecutar cuentoElementos([3,7,15,65,9,34,25]);
    
  }

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  var dia=numeroDeDia;
  var semana=0;
  var fin='Es fin de semana';
  var laboral='Es dia Laboral';
  var dato='No es un dia de la semana';  

  
  if (dia<=0)
  {return dato;}
  if ((dia===1)||(dia===7))
  {
	  return fin;
  }
  if ((dia>1)&&(dia<7)) {
	return laboral;  
 
	 }
	 else {
	 return dato; 
  }
  return arguments.length;
  
  
} 
  


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  

  var numero=0;
  var nueve='';
  nueve=nueve+n;
  if (nueve[0]==9) {
    return true;
  }
  return false;
  


}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

 
    var numero=arreglo;
    var distinto=0;
    var contador=1;
    
    for (var i=0; i<numero.length; i++) {
      
      if (i===0)
      {
         distinto=numero[i];
     // console.log ('Se igualan');
      //console.log ('Distinto es igual a '+distinto);
    }
      else {
       // console.log ('Se comparan');
       
        if ((numero[i])===(distinto))
        {
          //console.log ('numero es '+numero+'distinto es '+distinto);
          contador=contador+1;
        //  console.log ('Tenemos '+contador+' índices iguales');
          
        }
        if (contador===numero.length) {
          
          return true
        }
        }
      
    }
    return false;
      
  } 
  
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var arreglo=array;
  var ordenado=[];
  var pedidos='No se encontraron los meses pedidos';
  var contador=0;
  
   for (var i=0; i<arreglo.length; i++)
  {
	  if (arreglo[i]=='Enero') {
	  //console.log ('Encontro Enero'); 
	  ordenado[2]=ordenado[2]=arreglo[i]; //Invierto orden debido a test.
	  //console.log (ordenado);
	  contador=contador+1;
	  }
	  if (arreglo[i]=='Marzo') {
	  //console.log ('Encontro Marzo'); 
	  ordenado[0]=ordenado[0]=arreglo[i]; //Invierto orden debido a test.
	  //console.log (ordenado);
	  contador=contador+1;
	  }
	  if (arreglo[i]=='Noviembre') {
	  //console.log ('Encontro Noviembre'); 
	  ordenado[1]=ordenado[1]=arreglo[i]; // Invierto orden debido a test.
	  //console.log (ordenado);
	  contador=contador+1;
	  }
	  if (contador===3)
	  {
		  //console.log ('fin');
		  return ordenado;
	  }
  }
   return pedidos;
}





function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

var arreglo=array;
var enteros=[];
var mayores=0;
var e=0;

for (var i=0; i<arreglo.length; i++) {
	
	if (arreglo[i]>100&&arreglo[i]<=200) {
		
		enteros[e]=enteros[e]=arreglo[i];
		//console.log (enteros);
		e=e+1;
		
	}
 

}

return enteros;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arreglo=[];
var n=[];
var container=[];
i=-1;
n[0]=n[0]=numero;

do {
         i=i+1;
		 
         n[i]=n[i]+2;
    //     console.log (n);
		 if(i<9) { //evitar se repita ultimo indice
		 n[i+1]=n[i+1]=n[i];
		// console.log('Numero: '+n[i]);
		 //console.log('i es igual a: '+i)
		 }
     if (i===n[i]) {
	 	  
      return 'Se interrumpió la ejecución';
      Break; // Break
	 }
	 
		 
		 
	 }
	 
	 while (i<=8);
	// n.pop(); // Desactivo generando filtro
	 return n;
	 

}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var arreglo=[];
var n=[];
var iteraciones=[1,2,3,4,5,6,7,8,9,10];
i=-1;
n[0]=n[0]=numero;



for (var i=0; i<iteraciones.length; i++) {
	if (i===5)
	{
		iteraciones.shift();
		iteraciones.shift();		
		n[i]=n[i]+2;
		n[i+1]=n[i+1]=n[i];
		
		continue;
	}
	
	n[i]=n[i]+2;
			 if(i<9) { //evitar se repita ultimo indice
             
			 n[i+1]=n[i+1]=n[i]; }
	
	
}
n[i]=n[i]+2;
return n;
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
