const obtenerInfo = document.querySelector("#enviarDatosContacto");
obtenerInfo.addEventListener("click" ,getInfo)

const usuariosGitHub=[];

function getInfo() {
    Swal.fire({
        title: 'Dejanos tu usuario de gitHub!',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            //agregamos el usuario de gitHub a nuestro arreglo de usuarios
            usuariosGitHub.push(login);
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {                
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,

            imageUrl: result.value.avatar_url
          })
        }
      })
}

console.log(usuariosGitHub);