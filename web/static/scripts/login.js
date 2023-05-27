const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{6,12}$/, // 6 a 12 digitos.
}
const campos = {
    usuario: false,
    password: false,
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('usuario').classList.remove('border-danger');
                document.getElementById('div-usuario').classList.remove('incorrecto');
                document.getElementById('div-usuario').classList.add('correcto');
                document.querySelector('#div-usuario .icon').classList.add('bi-check-circle-fill');
                document.querySelector('#div-usuario .icon').classList.remove('bi-x-circle-fill');
                campos['usuario'] = true;
            }else{
                document.getElementById('usuario').classList.add('border-danger');
                document.getElementById('div-usuario').classList.add('incorrecto');
                document.getElementById('div-usuario').classList.remove('correcto');
                document.querySelector('#div-usuario .icon').classList.remove('bi-check-circle-fill');
                document.querySelector('#div-usuario .icon').classList.add('bi-x-circle-fill');
                campos['usuario'] = false;
            }
        break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('password').classList.remove('border-danger');
                document.getElementById('div-password').classList.remove('incorrecto');
                document.getElementById('div-password').classList.add('correcto');
                document.querySelector('#div-password .icon').classList.add('bi-check-circle-fill');
                document.querySelector('#div-password .icon').classList.remove('bi-x-circle-fill');
                campos['password'] = true;
            }else{
                document.getElementById('password').classList.add('border-danger');
                document.getElementById('div-password').classList.add('incorrecto');
                document.getElementById('div-password').classList.remove('correcto');
                document.querySelector('#div-password .icon').classList.remove('bi-check-circle-fill');
                document.querySelector('#div-password .icon').classList.add('bi-x-circle-fill');
                campos['password'] = false;
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.usuario && campos.password){
        formulario.reset();
        document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
		setTimeout(() =>{
			document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
		}, 5000);
        document.querySelectorAll('.correcto').forEach((icono) => {
            icono.classList.remove('correcto');
        });
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
    }else{
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
    }
})