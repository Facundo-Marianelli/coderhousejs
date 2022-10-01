//clase constructora de Alumno
class Curso {
    //la clase alumno va a tener un nombre y apellido, edad, email y los idiomas que sabe
    constructor (id,nombre, nivel, idioma, profesor,precio){
        this.id=id;
        this.nombre=nombre;
        this.nivel=nivel;
        this.idioma=idioma;
        this.profesor=profesor;
        this.precio=precio;
    }
    presentacion() {
        console.log("hola soy "+ this.name +" tengo "+this.age+ " y me gustaria aprender: "+ this.languages)
      }
}

//inicializo variables:

const cursos = [
 {  id: 1, nombre: "Curso de ingles para Economía", nivel: "A2" , idioma: "Ingles" , profesor: "Adriana" , precio: 4000    },
 {  id: 2, nombre: "Curso de ingles para Principiates", nivel: "A1" , idioma: "Ingles" , profesor: "Pepe" , precio: 2000    }
]

//defino el local storage.

localStorage.length === 0 && localStorage.setItem("cursos",JSON.stringify(cursos));
DatosCursos=localStorage.getItem("cursos") || localStorage.setItem("cursos",JSON.stringify(cursos));



//inicializo variables
const items = document.querySelector("#items");
const muestroCursos=document.querySelector("#mostrandoCursos")
console.log(cursos);

const accionCurso=document.querySelector("#creacionCurso");
accionCurso.addEventListener("click", crearCurso);

//construccion de funciones

function renderizarCursos() {
    let cursos=JSON.parse(localStorage.getItem("cursos"));
    items.innerHTML="";
    console.log(cursos.length)
    console.log(cursos)
    cursos.forEach((curso) => {
      let htmlFiltrados = `
          <div class="col-12 mb-5 d-flex flex-row justify-content-center">
          <div class="card text-dark flex-row" style="width: 30rem;">
          <h4>${curso.nombre}</h4>
          <div>
          <img  style="width: 100px;" src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1664136816/Curso_mhiruy.jpg" alt="Card image cap">
          </div>
              <div class="card-body" >
                  <h5 class="card-title">Profesor: ${curso.profesor}</h5>
                  <p>Nivel :${curso.nivel}</p>
                  <p>Precio: ${curso.precio}$</p>
                  <button type="button" class="btn btn-success">Comprar</button>
              </div>
          </div>
          </div>
          `;
        items.innerHTML += htmlFiltrados;
    });
}

//invoco funciones, tambien en los eventos click.

renderizarCursos();


function crearCurso(nombre,nivel,idioma,profesor,precio) {
    var valores=document.querySelector("#valoresNuevoCurso");
    const inputElements = valores.querySelectorAll("input");
    let cursos=JSON.parse(localStorage.getItem("cursos"));
    console.log(inputElements);
    nombre=inputElements[0].value;
    nivel=inputElements[1].value;
    idioma=inputElements[2].value;
    profesor=inputElements[3].value;
    precio=inputElements[4].value;
    let id=cursos.length+1;
    const newCurso= new Curso(id,nombre,nivel,idioma,profesor,precio);
    cursos.push(newCurso);
    localStorage.setItem("cursos" , JSON.stringify(cursos));
    Swal.fire(
        'Curso Creado exitosamente!',
        'El curso fue agregado!',
        'success'
    )
    renderizarCursos();
}

