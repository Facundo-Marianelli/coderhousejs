const obtenerInfo = document.querySelector("#enviarDatosContacto");
obtenerInfo.addEventListener("click" ,getInfo)

const correos=[];

function getInfo() {
    Swal.fire({
        title: 'Dejanos tu email!',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            //agregamos el usuario de gitHub a nuestro arreglo de usuarios
            if(login.includes(".")==true && login.includes(".com")==true)
            {
              Swal.fire(
                'contacto guardado exitosamente!',
                'El contacto fue agregado!',
                'success'
                )
                correos.push(login)
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Algo salio mal!',
                footer: '<a href="">Incluyo @ y .com ?</a>'
              })
            }

        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
      })
}

console.log(correos);