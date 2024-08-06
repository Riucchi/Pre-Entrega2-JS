let operacionActual = '';
let numero1 = '';
let numero2 = '';

const pantallaInput = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones button');
const historial = document.getElementById('historial');

botones.forEach(boton => {
    boton.onclick = function() {
        const valor = boton.textContent;
        switch (valor) {
            case '+':
            case '-':
            case '*':
            case '/':
                operacionActual = valor;
                numero1 = pantallaInput.value;
                pantallaInput.value = '';
                break;
            case '=':
                numero2 = pantallaInput.value;
                const resultado = eval(`${numero1} ${operacionActual} ${numero2}`);
                pantallaInput.value = resultado;
                agregarOperacion(`${numero1} ${operacionActual} ${numero2} = ${resultado}`);
                break;
            case 'C':
                pantallaInput.value = '';
                operacionActual = '';
                numero1 = '';
                numero2 = '';
                break;
            default:
                pantallaInput.value += valor;
        }
    };
});

function agregarOperacion(operacion) {
    const li = document.createElement('li');
    li.textContent = operacion;
    historial.appendChild(li);
}