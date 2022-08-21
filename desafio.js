//defino la variable nota donde voy a ir guardando las notas y sacando el promedio, no lo parseo a INT ya que nunca tomaría el "exit"
// parseo a int una vez dentro del while
let nombre= prompt("Ingrese su nombre")
// que no sea un string repito hasta que ingrese un string
while (isNaN(nombre)!=true)
{
    //si es vacio imprimo que ingreso algo vacio
    if (nombre ==="")
    {
        alert("Ingreso un nombre vacio")
    }
    //si no ingreso un numero
    else{
        alert("ingreso un numero")
    }
    //si no es numero es true:
    //si no es un string y no es vacio, es un numero
    nombre= prompt("Ingrese su nombre")
}
alert(`a continuacion ingrese las notas de ${nombre}`)
let nota = prompt("Ingrese su nota, escriba exit para dejar de cargar notas y ver el promedio!")
//defino las variables, promedio, acumulador y contador con las que voy a hacer el promedio
var promedio=0;
var acum=0;
var cont=0;
//mientras que la nota sea distintos a exit sigo, si el usuario escribe EXIT lo convierto a minuscula
while (nota.toLowerCase() !=="exit" )
{
    //comparo que los valores no sean vacios
    //si la nota es vacia, entro en esta condicion donde le aviso al usuario que no puede ingresar datos vacios.
    if (nota ==="")
    {
        alert("recuerde que la nota ingresada no puede estar vacia, a continuacion ingrese nuevamente la nota")
    }
    //si el int de nota es menor a 1 o mayor a 10, aviso que no puede ingresar esos valores
    else if (parseInt(nota)<1 || parseInt(nota)>10)
    {
        alert("los valores deben estar entre 1 y 10!, por favor ingrese nuevamente la nota");
    }
    //si el int de la nota es mayor igual a 1 y menor igual a 10 , osea que esta entre ese rango valido de notas, entramos  y podemos actualizar el promedio
    else if (parseInt(nota)>=1 && parseInt(nota)<=10){
        //convierto a int una vez que entro al for
        nota = parseInt(nota);
        //guardo en acumulador la sumatoria de notas, en contador la cantidad de notas y en promedio divido acum/cont
        acum=acum+nota;
        cont=cont+1;
        promedio=acum/cont;
        console.log("notas guardadas y promedio actualizado") 
    }
    //si entramos por aca es que ingreso un tipo de dato no valido
    else{
        alert("Ingreso un tipo de dato no valido, recuerde que solo puede ingrsar numeros entero entre 1 y 10")
        
    }
    //pido nuevamente la nota
    nota = prompt("Ingrese su nota, escriba exit para dejar de cargar notas y ver el promedio!");
}
//ahora valido si el promedio es mayor a 7 o menor a 7:
//solo valido mayor o menor a 7 y no otras condiciones ya que no permiti la carga de otross valores como 13,14,15 o menores a 1: 0-1-4-5

if (promedio>=7)
{
    console.log(`${nombre} aprobo el ciclo lectivo ya que su promedio es ${promedio} :)`)
}
else if (promedio<7)
{
    console.log(`${nombre} desaprobo el ciclo lectivo ya que su promedio es ${promedio} :(`)
}

