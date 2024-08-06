const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones button');
let operaciones = [];

let operacionActual = '';
let numero1 = '';
let numero2 = '';
a
botones.forEach(boton => {
    boton.onclick = function() {
        const valor = boton.textContent;
        switch (valor) {
            case '+':
            case '-':
            case '*':
            case '/':
                operacionActual = valor;
                numero1 = pantalla.value;
                pantalla.value = '';
                break;
            case '=':
                numero2 = pantalla.value;
                const resultado = eval(`${numero1} ${operacionActual} ${numero2}`);
                pantalla.value = resultado;
                agregarOperacion(`${numero1} ${operacionActual} ${numero2} = ${resultado}`);
                break;
            case 'C':
                pantalla.value = '';
                operacionActual = '';
                numero1 = '';
                numero2 = '';
                break;
            default:
                pantalla.value += valor;
        }
    };
});

function agregarOperacion(operacion) {
    const historial = document.getElementById('historial');
    if (!historial) {
        const ul = document.createElement('ul');
        ul.id = 'historial';
        ul.innerHTML = `<p>Últimas Operaciones:</p>`;
        document.body.appendChild(ul);
    }
    const li = document.createElement('li');
    li.textContent = operacion;
    li.onclick = function() {
        seleccionarOperacion(this);
    };
    historial.appendChild(li);
}

function seleccionarOperacion(elemento) {
    const operacionSeleccionada = elemento.textContent;
    pantalla.value = operacionSeleccionada.split('=')[0].trim();
}