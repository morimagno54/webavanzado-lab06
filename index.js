function diasHastaNavidad() {
    const hoy = new Date();
    const navidad = new Date(hoy.getFullYear(), 11, 25);

    if (hoy > navidad) {ño
        navidad.setFullYear(hoy.getFullYear() + 1);
    }

    const diferenciaMs = navidad - hoy;

    const diasHastaNavidad = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    return diasHastaNavidad;
}

const diasRestantes = diasHastaNavidad();
console.log(`Quedan ${diasRestantes} días hasta Navidad.`);



function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);

    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    if (hoy.getMonth() < fechaNac.getMonth() || (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

const fechaDeNacimiento = '2002-05-03'; 
const edad = calcularEdad(fechaDeNacimiento);
console.log(`La persona tiene ${edad} años.`);

function validarFormulario(datos) {
    const camposObligatorios = ['nombre', 'email', 'fechaNacimiento'];
    const camposOpcionales = ['telefono'];

    function esFechaValida(fecha) {
        return !isNaN(new Date(fecha).getTime());
    }

    function esEmailValido(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    for (const campo of camposObligatorios) {
        if (!datos[campo]) {
            return `El campo ${campo} es obligatorio.`;
        }
    }

    if (datos.fechaNacimiento && !esFechaValida(datos.fechaNacimiento)) {
        return 'La fecha de nacimiento no es válida.';
    }

    if (datos.email && !esEmailValido(datos.email)) {
        return 'El correo electrónico no es válido.';
    }

    return 'Formulario válido.';
}

const formularioDatos = {
    nombre: 'Magno Mori',
    email: 'magno@hotmail.com',
    fechaNacimiento: '2000-05-03',
    telefono: '123456789'
};

const resultadoValidacion = validarFormulario(formularioDatos);
console.log(resultadoValidacion);
