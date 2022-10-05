//clase constructora de Alumno
class Alumno {
    //la clase alumno va a tener un nombre y apellido, edad, email y los idiomas que sabe
    constructor (id,nombre, edad, email,idiomas){
        this.id=id;
        this.nombre=nombre;
        this.edad=edad;
        this.email=email;
        this.idiomas=idiomas;
    }
    presentacion() {
        console.log("hola soy "+ this.name +" tengo "+this.age+ " y me gustaria aprender: "+ this.languages)
      }
}

//inicializo variables:

const alumnosDatos = [
{
    id: 1,
    nombre: "Facundo",
    edad: 23,
    sexo: "M",
    nivel: "B1",
    email: "facumarianelli@gmail.com",
    idiomas: ["Frances", "Ingles"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663381942/Avatar_gob5i5.png",
},
{
    id: 2,
    nombre: "Josefina",
    edad: 23,
    sexo: "F",
    nivel: "B1",
    email: "josefina1@gmail.com",
    idiomas: ["Ingles"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663381942/Avatar_gob5i5.png",
},
{
    id: 3,
    nombre: "Pedro",
    edad:21,
    sexo: "NA",
    nivel: "A2",
    email: "pedro@gmail.com",
    idiomas: ["Frances"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663381942/Avatar_gob5i5.png",
},
{
    id: 4,
    nombre: "Sol",
    edad:21,
    sexo: "F",
    nivel: "A1",
    email: "pedro@gmail.com",
    idiomas: ["Frances"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663381942/Avatar_gob5i5.png",
}
    
];

let niveles= ["A1","A2","B1","B2"]
    
let filtros = [];

const filtrosRenderizados =[];


let datosAlumnos=JSON.parse(localStorage.getItem("alumnos"));

//optimizo

localStorage.length === 0 && localStorage.setItem("alumnos",JSON.stringify(alumnosDatos));

alumnos=localStorage.getItem("cursos") || localStorage.setItem("cursos",JSON.stringify(alumnosDatos));



//obtengo los elementos del html el cual dispara eventos y luego agrego click para disparar el evento con su funcion.

const items = document.querySelector("#items");

const itemFiltrados=document.querySelector("#alumnosFiltrados")

const cambiar = document.querySelector("#cambiarColores");
cambiar.addEventListener("click", cambiarColoresBotones);

const vacio=document.querySelector("#ver");
vacio.addEventListener("click", verFiltrados);

const alumnosFiltrados=document.querySelector("#filtrarPorNivel");
alumnosFiltrados.addEventListener("click",verFiltrosPorNivel)

const restartFiltros= document.querySelector("#resetearFiltros");
restartFiltros.addEventListener("click", resetFiltros)

const creacionAlumno=document.querySelector("#crearAlumno");
creacionAlumno.addEventListener("click", crearAlumno)

var inputs, index;

inputs = document.getElementsByTagName('input');


//construyo funciones:

function renderizarAlumnos() {
    items.innerHTML="";
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    alumnos.forEach((alumno) => {
    //si el alumno es Masculino, le defino la imagen de un avatar Masculino por defecto
    if (alumno.sexo==="M"){
    alumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447133/Avatar_Hombre_xlw4dj.jpg";
    }
    //si el Alumno es Femenino, le defino la imagen de un avatar Femenino por defecto
    else if (alumno.sexo==="F")
    {
    alumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447137/Avatar_Mujer_y5euoy.png";
    }
    //si no es definido o NA, le defino una imagen de un avatar por defecto.
    else{
    alumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663381942/Avatar_gob5i5.png";
    }
    //muestro datos por pantalla:
    let alumnoHTML = `
        <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
        <div class="card text-light bg-dark" style="width: 18rem;">
            <img class="card-img-top" src="${alumno.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${alumno.nombre}</h5>
                <p>tiene interes en aprender: ${alumno.idiomas}</p>
                <p>${alumno.email}</p>
                <p>${alumno.id}</p>
                <button class="btn btn-primary" id="cambioColor" onClick="mostrarDatosConsola(${alumno.id})">Ver todos los datos</button>
            </div>
        </div>
        </div>
        `;
    items.innerHTML += alumnoHTML;
});
}
renderizarAlumnos();

//renderizo los items filtrados.
function renderizarFiltrados() {
    itemFiltrados.innerHTML="";
    console.log(filtros.length)
    console.log(filtros)
    filtros.forEach((alumnoFiltrado) => {
    let htmlFiltrados = `
        <h4>${alumnoFiltrado.nivel}</h4>
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
        <div class="card text-dark flex-row" style="width: 30rem;">
        <div>
        <img  style="width: 100px;" src="${alumnoFiltrado.img}" alt="Card image cap">
        </div>
            <div class="card-body" >
                <h5 class="card-title">${alumnoFiltrado.nombre}</h5>
                <p>${alumnoFiltrado.edad}</p>
                <p>${alumnoFiltrado.email}</p>
            </div>
        </div>
        </div>
        `;
    itemFiltrados.innerHTML += htmlFiltrados;
    });

}

function cambiarColoresBotones (){
    //obtengo todos los botones y cada uno le cambio el ID por botonesBlue, y luego le aplico el css.
    let botones=document.getElementsByTagName("button");
    console.log(botones);
    for (const boton of botones)
    {
    boton.id="botonesBlue";
    console.log("valor",boton.id);
    }
}
function verFiltrados() {
    //prompt para que ingrese que valor quiere buscar
    var sexo= prompt("ingrese el sexo F (para chicas) o M (para chicos) o NA (si es sin definir), si ingresa una letra distinta no vera cambios");
    //mientras sea numero vuelvo a pedir
    while (isNaN(sexo)===false ){
    alert("ingrese una letra")
    var sexo= prompt("ingrese el sexo F (para chicas) o M (para chicos) o NA (si es sin definir)");
    }
    //una vez q no es numero convierto en UpperCase y recorro todos los alumnos para encontrar condicidencia en el sexo.
    sexo = sexo.toUpperCase();
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    alumnos.forEach((alumno) => {

        //Optimizo 
        alumno.sexo===sexo ? filtros.push(alumno) : console.log("no es del sexo indicado");
    }
    )
    renderizarFiltrados();
};

function resetFiltros() {
    window.location.reload();
}

function verFiltrosPorNivel() {
    var valorInput = document.querySelector('#valorFiltro');
    valorInput=valorInput.value;

    valorInput=valorInput.toUpperCase();
    if (niveles.includes(valorInput)===false)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se encontro el nivel!',
            footer: '<a href="">Ingrese un nivel valido por favor</a>'
          })
    }
    else{
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    alumnos.forEach((alumno) => {

        //OPTIMIZO
        alumno.nivel===valorInput ? filtros.push(alumno) : console.log("no es del nivel indicado");
    }
    )
    renderizarFiltrados();
    }
};

//muestro los datos por consola, encuentro el ID que esta asociado al click que hago cuando toco el boton y llamo a la funcion con el onClick.
function mostrarDatosConsola(id){
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    let alumno = alumnos.find((alumno) => alumno.id === id);
    alert(`abra la consola para ver todos los datos de ${alumno.nombre}`)
    console.log(alumno);
}
function crearAlumno(nombre,edad,email,idiomas){
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    nombre =inputs[0].value;
    edad = inputs[1].value;
    email =inputs[2].value;
    idiomas = inputs[3].value;
    id=alumnos.length+1;
    const newAlumno = new Alumno (id,nombre,edad,email,idiomas);
    alumnos.push(newAlumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    Swal.fire(
        'Alumno Creado exitosamente!',
        'El Alumno fue agregado!',
        'success'
        )
    renderizarAlumnos();
}