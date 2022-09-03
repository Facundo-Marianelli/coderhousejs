function chequearEmail(email)
{
    //creo la variable emailValidation que devuelve true si el email es correcto o false si encontro un error.
    let emailValidation=false;
    //recorro el string
    for (let s of email)
    {
        // valido que tenga el @ y el .com
        //el @ fue validado a mano recorriendo el string para demostrar el recorrido de elementos en un string.
        if (s==="@" && (email.includes(".com")===true))
        {
            //si contiene arroba y .com pongo la variable en true
            emailValidation=true;
        }
    }
    //la funncion devuelve la variable con el valor de la validacion del email.
    return emailValidation;
}
//funcion para chequear que el nombre este bien ingresado
function chequearNombre(nombre){
    let nombreValidado=false;
    //si no es un number, esta bien el dato!
    if (isNaN(nombre)===true)
    {
        //pongo la variable en true
        nombreValidado=true;
    }
    return nombreValidado;
}
//funcion para chequear que la edad este bien ingresada
function chequearEdad(edad){
    let edadValidada=false;
    //lo convierto a numero la edad, conservado sus decimales en caso que contenga
    edad= Number(edad)
    //si es un numero, y es un entero, estamos bien
    if ((isNaN(edad)===false) && (Number.isInteger(edad)===true))
    {
        //valido que la edad sea mayor a 2. 
        if (edad>2===true){
            //pongo la variable en true.
            edadValidada=true;
        }
    }
    return edadValidada
}
function chequearIdiomas(idiomas)
{
    let idiomasValidado=false;
    if (isNaN(idiomas)===true)
    {
        idiomasValidado=true;
    }
    return idiomasValidado;
}
//creo clase constructora con el Alumno, que reciba nombre edad , email y idiomas como parametro
class Alumno {
    //la clase alumno va a tener un nombre y apellido, edad, email y los idiomas que sabe
    constructor (name, age, email,languages){
        this.name=name;
        this.age=age;
        this.email=email;
        this.languages=languages;
    }
    presentacion() {
        console.log("hola soy "+ this.name +" tengo "+this.age+ "y me gustaria aprender: "+ this.languages)
      }
}

//creo variables para los atributos  del Alumno, nombre,edad,email,idiomas.

//en cada variable de state, voy a guardar el estado de la llamada a la funcion.

//mientras que sea false repito el proceso, pidiendo un nuevo prompt y llamando nuevamente a la funcion y actualizando la variable de estado con el estado de la llamada a la funcion
//repito hasta que la variable sea en true, es decir que los datos fueron bien ingresados!


let nombre= prompt("Ingrese su nombre y Apellido")

//arrow function para validar el nombre no sea numero si es numbero devuelve true la funcion entonces seguimos, sino pedimos hasta que no sea un numero el nombre ingresado
const chequearNombreArrow = (nombre) => isNaN(nombre) ?  true : false;

while (chequearNombreArrow(nombre)===false){
    alert("no ingrese numeros en el nombre")
    nombre= prompt("Ingrese su nombre y apellido")
    nombreValidationState=chequearNombreArrow(nombre)
}


let edad=prompt("Ingrese su edad");
let edadValidationState=chequearEdad(edad);

while (edadValidationState==false)
{
    alert("debe ingresar un numero entero");
    edad=prompt("Ingrese su edad");
    edadValidationState=chequearEdad(edad);
    alert(edadValidationState)
}

let email=prompt("Ingrese el correo")
let emailValidadoState=chequearEmail(email)
while (emailValidadoState==false){
    alert("Datos de correo incorrectos, ingreselos nuevamente, recuerde que debe contener @ y .com!")
    email=prompt("Ingrese el correo")
    emailValidadoState=chequearEmail(email)
}

let idiomas=prompt("Ingrese los idiomas")
let idiomasValidadoState=chequearIdiomas(idiomas)
while (idiomasValidadoState==false)
{
    alert("no ingrese numeros los idiomas, sino que ingrese cuales sabe!")
    idiomas= prompt("Ingrese los idiomas")
    idiomasValidadoState=chequearIdiomas(idiomas)
}

//
alert("todos los datos fueron cargados correctamente!")
const alumno1 = new Alumno(nombre,edad,email,idiomas);
console.log(alumno1)
alumno1.presentacion()