const __Ahorcado_NameSpace__ = {
    // Variables
    PalabraSecreta: '',
    PalabraCompuestaDeGuiones: '',
    NumFallos: 0,
    LetrasIntentadas: [],
    Palabras: ['javascript', 'python', 'html', 'css', 'node', 'react'],
    contenedorImagenFallos: null,
    CtrlBotonesLetras: null,
    infoPartidaPerdida: null,
    infoPartidaGanada: null,

    // Inicializa el juego
    resetGame: function() {
        this.NumFallos = 0;
        this.LetrasIntentadas = [];
        this.PalabraSecreta = this.Palabras[Math.floor(Math.random() * this.Palabras.length)];
        this.PalabraCompuestaDeGuiones = '_'.repeat(this.PalabraSecreta.length);
        this.infoPartidaPerdida.style.display = 'none';
        this.infoPartidaGanada.style.display = 'none';
        this.actualizarControles();
        this.renderizarBotonesLetras();
    },

    // Actualiza los elementos de la UI
    actualizarControles: function() {
        txtPalabra_Secreta.innerHTML = 'Palabra Secreta: ' + this.PalabraSecreta;
        txtPalabra_Usuario.innerHTML = 'Palabra: ' + this.PalabraCompuestaDeGuiones;
    },

    // Mostrar imagen del ahorcado según los fallos
    MostrarFallos: function(p_numFallos) {
        var AHORCADO = [
            '                      +---+%\\\n                  |   |%\n                      |%\n                      |%\n                      |%\n                      |%\n                =========',
            '                  +---+%\n                  |   |%\n                  O   |%\n                      |%\n                      |%\n                      |%\n                =========',
            '                  +---+%\n                  |   |%\n                  O   |%\n                      |%\n                      |%\n                      |%\n                =========',
            '                  +---+%\n                  |   |%\n                  O   |%\n                 /|   |%\n                      |%\n                      |%\n                =========',
            '                  +---+%\n                  |   |%\n                  O   |%\n                 /|\\  |%\n                      |%\n                      |%\n                =========',
            '                  +---+%\n                  |   |%\n                  O   |%\n                 /|\\  |%\n                 /    |%\n                      |%\n                =========',
            '                  +---+%\n                  |   |%\n                  O   |%\n                 /|\\  |%\n                 / \\  |%\n                      |%\n                ========='
        ];
        return AHORCADO[p_numFallos].replace(/%/g, '<br>').replace(/ /g, '&nbsp;');
    },

    // Comprobar si la letra está en la palabra y actualizar la palabra compuesta
    ComprobarSiLetraUsuarioEstaEnPalabra_y_devolverPosicionesSiEsta: function(p_letra) {
        let posiciones = [];
        for (let i = 0; i < this.PalabraSecreta.length; i++) {
            if (this.PalabraSecreta[i] === p_letra) {
                posiciones.push(i);
            }
        }

        if (posiciones.length > 0) {
            // Actualizar la palabra compuesta con la letra encontrada
            let palabraArray = this.PalabraCompuestaDeGuiones.split('');
            for (let i of posiciones) {
                palabraArray[i] = p_letra;
            }
            this.PalabraCompuestaDeGuiones = palabraArray.join('');
        } else {
            // Si no se encuentra la letra, aumentar fallos
            this.NumFallos++;
        }
    },

    // Comprobar si el jugador ha ganado o perdido
    ComprobarSiGanadoPerdido: function() {
        if (this.NumFallos >= 6) {
            this.infoPartidaPerdida.style.display = 'block';
            this.infoPartidaGanada.style.display = 'none';
        } else if (this.PalabraCompuestaDeGuiones === this.PalabraSecreta) {
            this.infoPartidaGanada.style.display = 'block';
            this.infoPartidaPerdida.style.display = 'none';
        }
    },

    // Crear los botones de letras para el jugador
    renderizarBotonesLetras: function() {
        const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.CtrlBotonesLetras.innerHTML = '';
        for (let letra of letras) {
            let boton = document.createElement('button');
            boton.textContent = letra;
            boton.onclick = () => {
                if (!this.LetrasIntentadas.includes(letra)) {
                    this.LetrasIntentadas.push(letra);
                    this.intentar(letra);
                }
            };
            this.CtrlBotonesLetras.appendChild(boton);
        }
    },

    // Intentar una letra
    intentar: function(p_letra) {
        this.ComprobarSiLetraUsuarioEstaEnPalabra_y_devolverPosicionesSiEsta(p_letra);
        if (this.NumFallos > -1) {
            this.contenedorImagenFallos.innerHTML = this.MostrarFallos(this.NumFallos);
        }
        this.ComprobarSiGanadoPerdido();
        this.actualizarControles();
    }
};

window.onload = function() {
    const txtPalabra_Secreta = document.getElementById('txtPalabra_Secreta');
    const txtPalabra_Usuario = document.getElementById('txtPalabra_Usuario');
    __Ahorcado_NameSpace__.contenedorImagenFallos = document.getElementById('ImagenFallos');
    __Ahorcado_NameSpace__.CtrlBotonesLetras = document.getElementById('ContenedorBotonesLetras');
    __Ahorcado_NameSpace__.infoPartidaPerdida = document.getElementById('PartidaPerdida');
    __Ahorcado_NameSpace__.infoPartidaGanada = document.getElementById('PartidaGanada');
    __Ahorcado_NameSpace__.resetGame();
};
