const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones button');
let operaciones = [];

let operacion = '';
let numero1 = '';
let numero2 = '';

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;
        switch (valor) {
            case '+':
            case '-':
            case '*':
            case '/':
                operacion = valor;
                numero1 = pantalla.value;
                pantalla.value = '';
                break;
            case '=':
                numero2 = pantalla.value;
                const resultado = eval(`${numero1} ${operacion} ${numero2}`);
                pantalla.value = resultado;
                agregarOperacion(`${numero1} ${operacion} ${numero2} = ${resultado}`);
                break;
            case 'C':
                pantalla.value = '';
                operacion = '';
                numero1 = '';
                numero2 = '';
                break;
            default:
                pantalla.value += valor;
        }
    });
});

function agregarOperacion(operacion) {
    const historial = document.getElementById('historial');
    if (!historial) {
        const ul = document.createElement('ul');
        ul.id = 'historial';
        ul.innerHTML = `<p>Ultimas Operaciones:</p><li>${operacion}</li>`;
        document.body.appendChild(ul);
    } else {
        const li = document.createElement('li');
        li.textContent = operacion;
        historial.appendChild(li);
    }
}

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const operacionSeleccionada = e.target.textContent;
        pantalla.value = operacionSeleccionada.split('=')[0].trim();
    }
});