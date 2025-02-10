document.addEventListener('DOMContentLoaded', function () {
    const newElementText = document.getElementById('newElementText');
    const addElementBtn = document.getElementById('addElementBtn');
    const elementList = document.getElementById('elementList');

    // Función para añadir un nuevo elemento a la lista
    function addElement() {
        const text = newElementText.value.trim();
        if (text === '') {
            return;
        }

        // Crear el nuevo elemento li
        const newLi = document.createElement('li');
        newLi.textContent = text;

        // Crear el botón de eliminación
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.classList.add('removeBtn');

        // Añadir el botón de eliminación al li
        newLi.appendChild(removeBtn);

        // Añadir el nuevo elemento li a la lista
        elementList.appendChild(newLi);

        // Limpiar el campo de texto
        newElementText.value = '';

        // Añadir evento al botón de eliminación
        removeBtn.addEventListener('click', () => {
            elementList.removeChild(newLi);
        });
    }

    // Añadir evento al botón de añadir elemento
    addElementBtn.addEventListener('click', addElement);

    // Añadir evento de presionar Enter en el campo de texto
    newElementText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addElement();
        }
    });
});
