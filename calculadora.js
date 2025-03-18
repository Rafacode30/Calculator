// Seleccionar la pantalla de la calculadora
const display = document.querySelector('.display');

// Seleccionar todos los botones
const buttons = document.querySelectorAll('.btn-custom');

// Recorrer todos los botones
buttons.forEach(button => {
    // Agregar un escuchador de eventos a cada botón
    button.addEventListener('click', () => {
        // Obtener el valor del botón que se hizo clic
        const buttonValue = button.textContent;

        // Lógica para manejar los botones
        if (buttonValue === 'C') {
            // Limpiar la pantalla
            display.value = '';
        } else if (buttonValue === '=') {
            // Calcular el resultado
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            // Agregar el valor del botón a la pantalla
            display.value += buttonValue;
        }
    });
});