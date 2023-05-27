const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,8}$/ // 8 numeros.
}

const campos = {
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
}
const validarFormulario = (e) =>{
	switch (e.target.name){
		case "nombre1":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('nombre1').classList.remove('border-danger');
				document.getElementById('div-nombre1').classList.add('correcto');
				document.getElementById('div-nombre1').classList.remove('incorrecto');
				document.querySelector('#div-nombre1 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-nombre1 .icon').classList.remove('bi-x-circle-fill');
				campos['nombre'] = true;
			}else{
				document.getElementById('nombre1').classList.add('border-danger');
				document.getElementById('div-nombre1').classList.add('incorrecto');
				document.getElementById('div-nombre1').classList.remove('correcto');
				document.querySelector('#div-nombre1 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-nombre1 .icon').classList.add('bi-x-circle-fill');
				campos['nombre'] = false;
			}
		break;
		case "nombre2":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('nombre2').classList.remove('border-danger');
				document.getElementById('div-nombre2').classList.add('correcto');
				document.getElementById('div-nombre2').classList.remove('incorrecto');
				document.querySelector('#div-nombre2 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-nombre2 .icon').classList.remove('bi-x-circle-fill');
				campos['nombre'] = true;
			}else{
				document.getElementById('nombre2').classList.add('border-danger');
				document.getElementById('div-nombre2').classList.add('incorrecto');
				document.getElementById('div-nombre2').classList.remove('correcto');
				document.querySelector('#div-nombre2 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-nombre2 .icon').classList.add('bi-x-circle-fill');
				campos['nombre'] = false;
			}
		break;
		case "apellido1":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('apellido1').classList.remove('border-danger');
				document.getElementById('div-apellido1').classList.add('correcto');
				document.getElementById('div-apellido1').classList.remove('incorrecto');
				document.querySelector('#div-apellido1 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-apellido1 .icon').classList.remove('bi-x-circle-fill');
				campos['nombre'] = true;
			}else{
				document.getElementById('apellido1').classList.add('border-danger');
				document.getElementById('div-apellido1').classList.add('incorrecto');
				document.getElementById('div-apellido1').classList.remove('correcto');
				document.querySelector('#div-apellido1 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-apellido1 .icon').classList.add('bi-x-circle-fill');
				campos['nombre'] = false;
			}
		break;
		case "apellido2":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('apellido2').classList.remove('border-danger');
				document.getElementById('div-apellido2').classList.add('correcto');
				document.getElementById('div-apellido2').classList.remove('incorrecto');
				document.querySelector('#div-apellido2 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-apellido2 .icon').classList.remove('bi-x-circle-fill');
				campos['nombre'] = true;
			}else{
				document.getElementById('apellido2').classList.add('border-danger');
				document.getElementById('div-apellido2').classList.add('incorrecto');
				document.getElementById('div-apellido2').classList.remove('correcto');
				document.querySelector('#div-apellido2 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-apellido2 .icon').classList.add('bi-x-circle-fill');
				campos['nombre'] = false;
			}
		break;
		case "correo1":
			if(expresiones.correo.test(e.target.value)){
				document.getElementById('correo1').classList.remove('border-danger');
				document.getElementById('div-correo1').classList.add('correcto');
				document.getElementById('div-correo1').classList.remove('incorrecto');
				document.querySelector('#div-correo1 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-correo1 .icon').classList.remove('bi-x-circle-fill');
				campos['correo'] = true;
			}else{
				document.getElementById('correo1').classList.add('border-danger');
				document.getElementById('div-correo1').classList.add('incorrecto');
				document.getElementById('div-correo1').classList.remove('correcto');
				document.querySelector('#div-correo1 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-correo1 .icon').classList.add('bi-x-circle-fill');
				campos['correo'] = false;
			}
		break;
		case "correo2":
			if(expresiones.correo.test(e.target.value)){
				document.getElementById('correo2').classList.remove('border-danger');
				document.getElementById('div-correo2').classList.add('correcto');
				document.getElementById('div-correo2').classList.remove('incorrecto');
				document.querySelector('#div-correo2 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-correo2 .icon').classList.remove('bi-x-circle-fill');
				campos['correo'] = true;
			}else{
				document.getElementById('correo2').classList.add('border-danger');
				document.getElementById('div-correo2').classList.add('incorrecto');
				document.getElementById('div-correo2').classList.remove('correcto');
				document.querySelector('#div-correo2 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-correo2 .icon').classList.add('bi-x-circle-fill');
				campos['correo'] = false;
			}
		break;
		case "password1":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('password1').classList.remove('border-danger');
				document.getElementById('div-password1').classList.add('correcto');
				document.getElementById('div-password1').classList.remove('incorrecto');
				document.querySelector('#div-password1 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-password1 .icon').classList.remove('bi-x-circle-fill');
				campos['password'] = true;
			}else{
				document.getElementById('password1').classList.add('border-danger');
				document.getElementById('div-password1').classList.add('incorrecto');
				document.getElementById('div-password1').classList.remove('correcto');
				document.querySelector('#div-password1 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-password1 .icon').classList.add('bi-x-circle-fill');
				campos['password'] = false;
			}
		break;
		case "password2":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('password2').classList.remove('border-danger');
				document.getElementById('div-password2').classList.add('correcto');
				document.getElementById('div-password2').classList.remove('incorrecto');
				document.querySelector('#div-password2 .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-password2 .icon').classList.remove('bi-x-circle-fill');
				campos['password'] = true;
			}else{
				document.getElementById('password2').classList.add('border-danger');
				document.getElementById('div-password2').classList.add('incorrecto');
				document.getElementById('div-password2').classList.remove('correcto');
				document.querySelector('#div-password2 .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-password2 .icon').classList.add('bi-x-circle-fill');
				campos['password'] = false;
			}
		break;
		case "telefono":
			if(expresiones.telefono.test(e.target.value)){
				document.getElementById('telefono').classList.remove('border-danger');
				document.getElementById('div-telefono').classList.add('correcto');
				document.getElementById('div-telefono').classList.remove('incorrecto');
				document.querySelector('#div-telefono .icon').classList.add('bi-check-circle-fill');
				document.querySelector('#div-telefono .icon').classList.remove('bi-x-circle-fill');
				campos['telefono'] = true;
			}else{
				document.getElementById('telefono').classList.add('border-danger');
				document.getElementById('div-telefono').classList.add('incorrecto');
				document.getElementById('div-telefono').classList.remove('correcto');
				document.querySelector('#div-telefono .icon').classList.remove('bi-check-circle-fill');
				document.querySelector('#div-telefono .icon').classList.add('bi-x-circle-fill');
				campos['telefono'] = false;
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
    if(campos.nombre && campos.password && campos.correo && campos.telefono){
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
formulario.addEventListener('reset', (e) => {
	document.querySelectorAll('.correcto').forEach((icono) => {
		icono.classList.remove('correcto');
	});
	document.querySelectorAll('.incorrecto').forEach((icono) => {
		icono.classList.remove('incorrecto');
	});
	document.querySelectorAll('.border-danger').forEach((icono) => {
		icono.classList.remove('border-danger');
	});
	document.querySelectorAll('.mensaje-error').forEach((icono) => {
		icono.classList.remove('mensaje-error-activo');
	});
})