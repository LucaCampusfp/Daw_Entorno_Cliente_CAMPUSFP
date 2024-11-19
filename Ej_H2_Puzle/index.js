class JuegoPuzzle {
    constructor() {
        this.entradaImagen = document.getElementById('imageInput');
        this.seleccionPiezas = document.getElementById('piecesSelect');
        this.botonIniciar = document.getElementById('startButton');
        this.botonMostrarOriginal = document.getElementById('showOriginal');
        this.restartButton = document.getElementById('restartButton'); 
        this.botonResolver = document.getElementById('solveButton');
        this.botonReiniciar = document.getElementById('restartButton');  // Nuevo botón
        this.contenedorPuzzle = document.getElementById('puzzleContainer');
        this.imagenOriginal = document.getElementById('originalImage');
        this.imagenPrevia = document.getElementById('previewImage');
        this.spanTiempo = document.getElementById('time');
        
        this.piezas = [];
        this.piezaSeleccionada = null;
        this.tiempoInicio = null;
        this.intervaloTemporizador = null;
        this.juegoIniciado = false;
        
        this.iniciarListenersEventos();
        this.botonIniciar.disabled = true;
        this.botonResolver.disabled = true;
    }

    iniciarListenersEventos() {
        this.botonIniciar.addEventListener('click', () => this.iniciarJuego());
        this.botonMostrarOriginal.addEventListener('click', () => this.toggleImagenOriginal());
        this.entradaImagen.addEventListener('change', (e) => this.procesarSubidaImagen(e));
        this.botonResolver.addEventListener('click', () => this.resolverPuzzle());
        this.botonReiniciar.addEventListener('click', () => this.reiniciarJuego());
        this.restartButton.addEventListener('click', () => this.restartGame()); // Manejador de evento para reiniciar el juego
    }

    procesarSubidaImagen(evento) {
        const archivo = evento.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = (e) => {
                this.imagenOriginal.src = e.target.result;
                this.imagenPrevia.src = e.target.result;
                this.imagenOriginal.style.display = 'none';
                this.botonIniciar.disabled = false;
            };
            lector.readAsDataURL(archivo);
        }
    }

    async resolverPuzzle() {
        this.botonResolver.disabled = true;
        const tamanoRejilla = Math.sqrt(this.piezas.length);
        
        // Crear array con posiciones correctas
        const posicionesCorrectas = [];
        for (let y = 0; y < tamanoRejilla; y++) {
            for (let x = 0; x < tamanoRejilla; x++) {
                posicionesCorrectas.push({ x, y });
            }
        }

        // Mover cada pieza a su posición correcta
        for (let i = 0; i < this.piezas.length; i++) {
            const piezaCorrecta = this.piezas.find(
                pieza => pieza.dataset.correctX == posicionesCorrectas[i].x && 
                pieza.dataset.correctY == posicionesCorrectas[i].y
            );
            
            if (piezaCorrecta !== this.piezas[i]) {
                const indiceActual = this.piezas.indexOf(piezaCorrecta);
                await this.animarIntercambio(i, indiceActual);
                [this.piezas[i], this.piezas[indiceActual]] = [this.piezas[indiceActual], this.piezas[i]];
                this.actualizarPosicionPiezas();
            }
            
            await new Promise(resolve => setTimeout(resolve, 0.0001));
        }

        if (this.comprobarVictoria()) {
            this.manejarVictoria();
        }
    }

    animarIntercambio(indice1, indice2) {
        return new Promise(resolve => {
            const pieza1 = this.piezas[indice1];
            const pieza2 = this.piezas[indice2];
            const rect1 = pieza1.getBoundingClientRect();
            const rect2 = pieza2.getBoundingClientRect();
            
            const dx = rect2.left - rect1.left;
            const dy = rect2.top - rect1.top;
            
            pieza1.style.transform = `translate(${dx}px, ${dy}px)`;
            pieza2.style.transform = `translate(${-dx}px, ${-dy}px)`;
            
            setTimeout(() => {
                pieza1.style.transform = '';
                pieza2.style.transform = '';
                resolve();
            }, 0.001);
        });
    }

    iniciarJuego() {
        if (!this.imagenOriginal.src) {
            alert('Por favor, selecciona una imagen primero');
            return;
        }

        this.reiniciarJuego();
        const tamanoRejilla = Math.sqrt(parseInt(this.seleccionPiezas.value));
        this.crearPiezasPuzzle(tamanoRejilla);
        this.iniciarTemporizador();
        this.juegoIniciado = true;
        this.botonResolver.disabled = false;
        document.getElementById('previewContainer').style.display = 'none';
    }

    reiniciarJuego() {
        this.contenedorPuzzle.innerHTML = '';
        this.piezas = [];
        this.piezaSeleccionada = null;
        clearInterval(this.intervaloTemporizador);
        this.spanTiempo.textContent = '00:00';
        this.juegoIniciado = false;
    }
    restartGame() {
        // Reiniciar la página y el juego
        location.reload();  // Recarga la página para reiniciar todo
    }

    crearPiezasPuzzle(tamanoRejilla) {
        const anchoPieza = this.imagenOriginal.naturalWidth / tamanoRejilla;
        const altoPieza = this.imagenOriginal.naturalHeight / tamanoRejilla;
        const factorEscala = 1000 / this.imagenOriginal.naturalWidth;
        
        this.contenedorPuzzle.style.width = `${this.imagenOriginal.naturalWidth * factorEscala}px`;
        this.contenedorPuzzle.style.height = `${this.imagenOriginal.naturalHeight * factorEscala}px`;

        for (let y = 0; y < tamanoRejilla; y++) {
            for (let x = 0; x < tamanoRejilla; x++) {
                const pieza = document.createElement('div');
                pieza.className = 'puzzle-piece';
                pieza.style.width = `${anchoPieza * factorEscala}px`;
                pieza.style.height = `${altoPieza * factorEscala}px`;
                pieza.style.backgroundImage = `url(${this.imagenOriginal.src})`;
                pieza.style.backgroundSize = `${this.imagenOriginal.naturalWidth * factorEscala}px ${this.imagenOriginal.naturalHeight * factorEscala}px`;
                pieza.style.backgroundPosition = `-${x * anchoPieza * factorEscala}px -${y * altoPieza * factorEscala}px`;
                
                pieza.dataset.correctX = x;
                pieza.dataset.correctY = y;
                
                this.piezas.push(pieza);
            }
        }

        this.barajarPiezas();
        this.actualizarPosicionPiezas();
        this.agregarListenersClickPiezas();
    }

    barajarPiezas() {
        for (let i = this.piezas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.piezas[i], this.piezas[j]] = [this.piezas[j], this.piezas[i]];
        }
    }

    actualizarPosicionPiezas() {
        const tamanoRejilla = Math.sqrt(this.piezas.length);
        const anchoPieza = 100 / tamanoRejilla;
        const altoPieza = 100 / tamanoRejilla;

        this.piezas.forEach((pieza, indice) => {
            const x = (indice % tamanoRejilla) * anchoPieza;
            const y = Math.floor(indice / tamanoRejilla) * altoPieza;
            pieza.style.left = `${x}%`;
            pieza.style.top = `${y}%`;
            if (!pieza.parentElement) {
                this.contenedorPuzzle.appendChild(pieza);
            }
        });
    }

    agregarListenersClickPiezas() {
        this.piezas.forEach(pieza => {
            pieza.addEventListener('click', () => this.manejarClickPieza(pieza));
        });
    }

    async manejarClickPieza(pieza) {
        if (!this.juegoIniciado) return;
        
        if (!this.piezaSeleccionada) {
            this.piezaSeleccionada = pieza;
            pieza.classList.add('selected');
        } else {
            if (this.piezaSeleccionada !== pieza) {
                const indice1 = this.piezas.indexOf(this.piezaSeleccionada);
                const indice2 = this.piezas.indexOf(pieza);
                
                await this.animarIntercambio(indice1, indice2);
                [this.piezas[indice1], this.piezas[indice2]] = [this.piezas[indice2], this.piezas[indice1]];
                this.actualizarPosicionPiezas();
                
                if (this.comprobarVictoria()) {
                    this.manejarVictoria();
                }
            }
            this.piezaSeleccionada.classList.remove('selected');
            this.piezaSeleccionada = null;
        }
    }

    comprobarVictoria() {
        const tamanoRejilla = Math.sqrt(this.piezas.length);
        return this.piezas.every((pieza, indice) => {
            const currentX = indice % tamanoRejilla;
            const currentY = Math.floor(indice / tamanoRejilla);
            return pieza.dataset.correctX == currentX && pieza.dataset.correctY == currentY;
        });
    }

    manejarVictoria() {
        clearInterval(this.intervaloTemporizador);
        this.juegoIniciado = false;
        this.botonResolver.disabled = true;
        setTimeout(() => {
            //alert(`¡Felicitaciones! Has completado el puzzle en ${this.spanTiempo.textContent}`);
        }, 500);
    }

    iniciarTemporizador() {
        this.tiempoInicio = Date.now();
        clearInterval(this.intervaloTemporizador);
        
        this.intervaloTemporizador = setInterval(() => {
            const tiempoTranscurrido = Math.floor((Date.now() - this.tiempoInicio) / 1000);
            const minutos = Math.floor(tiempoTranscurrido / 60);
            const segundos = tiempoTranscurrido % 60;
            this.spanTiempo.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }, 1000);
    }

    toggleImagenOriginal() {
        if (this.imagenOriginal.style.display === 'none') {
            this.imagenOriginal.style.display = 'block';
            this.botonMostrarOriginal.textContent = 'Ocultar Original';
        } else {
            this.imagenOriginal.style.display = 'none';
            this.botonMostrarOriginal.textContent = 'Mostrar Original';
        }
    }
}

// Iniciar el juego
new JuegoPuzzle();
