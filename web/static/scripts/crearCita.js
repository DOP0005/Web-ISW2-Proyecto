const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}
const campos = {
    nombre: false,
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('border-danger');
                document.getElementById('div-nombre').classList.add('correcto');
                document.getElementById('div-nombre').classList.remove('incorrecto');
                document.querySelector('#div-nombre .icon').classList.add('bi-check-circle-fill');
                document.querySelector('#div-nombre .icon').classList.remove('bi-x-circle-fill');
                campos['nombre'] = true;
            }else{
                document.getElementById('nombre').classList.add('border-danger');
                document.getElementById('div-nombre').classList.add('incorrecto');
                document.getElementById('div-nombre').classList.remove('correcto');
                document.querySelector('#div-nombre .icon').classList.remove('bi-check-circle-fill');
                document.querySelector('#div-nombre .icon').classList.add('bi-x-circle-fill');
                campos['nombre'] = false;
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
    if(campos.nombre){
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
