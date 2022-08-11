const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmado= document.getElementById("passwordConfirmado");

let listaUsuarios = []

class Usuario {
    constructor(nombre, email, password, passwordConfirmado) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.passwordConfirmado = passwordConfirmado;

    }
}

// if (password1 != password2) {;
//     return "Los passwords deben de coincidir";
//   } else {
//     return "Los passwords coinciden"; 
//   }

function registroUsuario() {

    //let usuarioRegistrado = listaUsuarios.find((Usuario)=> objetoUsuario.email == nombre )
    const usuario = new Usuario(nombre.value, email.value, password.value, passwordConfirmado.value);
    console.log(usuario);


}

//function 