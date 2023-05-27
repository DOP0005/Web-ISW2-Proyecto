const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,8}$/ // 8 numeros.
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
}

const validarFormulario = (e) =>{
	switch (e.target.name){
		case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "apellido":
			validarCampo(expresiones.nombre, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono')
		break;
	}
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('border-danger');
		document.getElementById(`div-${campo}`).classList.remove('incorrecto');
		document.getElementById(`div-${campo}`).classList.add('correcto');
        document.querySelector(`#div-${campo} .icon`).classList.add('bi-check-circle-fill');
        document.querySelector(`#div-${campo} .icon`).classList.remove('bi-x-circle-fill');
		campos[campo] = true;
	}else{
        document.getElementById(`${campo}`).classList.add('border-danger');
		document.getElementById(`div-${campo}`).classList.add('incorrecto');
		document.getElementById(`div-${campo}`).classList.remove('correcto');
        document.querySelector(`#div-${campo} .icon`).classList.remove('bi-check-circle-fill');
        document.querySelector(`#div-${campo} .icon`).classList.add('bi-x-circle-fill');
		campos[campo] = false;
	}
}


inputs.forEach((input) =>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono){
		formulario.reset();

		document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
		setTimeout(() =>{
			document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.correcto').forEach((icono) =>{
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
