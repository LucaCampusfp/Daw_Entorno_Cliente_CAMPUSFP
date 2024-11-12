class PuzzleGame {
    constructor() {
        this.imageInput = document.getElementById('imageInput');
        this.piecesSelect = document.getElementById('piecesSelect');
        this.startButton = document.getElementById('startButton');
        this.showOriginalButton = document.getElementById('showOriginal');
        this.solveButton = document.getElementById('solveButton');
        this.puzzleContainer = document.getElementById('puzzleContainer');
        this.originalImage = document.getElementById('originalImage');
        this.previewImage = document.getElementById('previewImage');
        this.timeSpan = document.getElementById('time');
        
        this.pieces = [];
        this.selectedPiece = null;
        this.startTime = null;
        this.timerInterval = null;
        this.gameStarted = false;
        
        this.initializeEventListeners();
        this.startButton.disabled = true;
        this.solveButton.disabled = true;
    }

    initializeEventListeners() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.showOriginalButton.addEventListener('click', () => this.toggleOriginalImage());
        this.imageInput.addEventListener('change', (e) => this.handleImageUpload(e));
        this.solveButton.addEventListener('click', () => this.solvePuzzle());
    }

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.originalImage.src = e.target.result;
                this.previewImage.src = e.target.result;
                this.originalImage.style.display = 'none';
                this.startButton.disabled = false;
            };
            reader.readAsDataURL(file);
        }
    }

    async solvePuzzle() {
        this.solveButton.disabled = true;
        const gridSize = Math.sqrt(this.pieces.length);
        
        // Crear array con posiciones correctas
        const correctPositions = [];
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                correctPositions.push({ x, y });
            }
        }

        // Mover cada pieza a su posición correcta
        for (let i = 0; i < this.pieces.length; i++) {
            const correctPiece = this.pieces.find(
                piece => piece.dataset.correctX == correctPositions[i].x && 
                piece.dataset.correctY == correctPositions[i].y
            );
            
            if (correctPiece !== this.pieces[i]) {
                const currentIndex = this.pieces.indexOf(correctPiece);
                await this.animateSwap(i, currentIndex);
                [this.pieces[i], this.pieces[currentIndex]] = [this.pieces[currentIndex], this.pieces[i]];
                this.updatePiecesPosition();
            }
            
            await new Promise(resolve => setTimeout(resolve, 0.1));
        }

        if (this.checkWin()) {
            this.handleWin();
        }
    }

    animateSwap(index1, index2) {
        return new Promise(resolve => {
            const piece1 = this.pieces[index1];
            const piece2 = this.pieces[index2];
            const rect1 = piece1.getBoundingClientRect();
            const rect2 = piece2.getBoundingClientRect();
            
            const dx = rect2.left - rect1.left;
            const dy = rect2.top - rect1.top;
            
            piece1.style.transform = `translate(${dx}px, ${dy}px)`;
            piece2.style.transform = `translate(${-dx}px, ${-dy}px)`;
            
            setTimeout(() => {
                piece1.style.transform = '';
                piece2.style.transform = '';
                resolve();
            }, 300);
        });
    }

    startGame() {
        if (!this.originalImage.src) {
            alert('Por favor, selecciona una imagen primero');
            return;
        }

        this.resetGame();
        const gridSize = Math.sqrt(parseInt(this.piecesSelect.value));
        this.createPuzzlePieces(gridSize);
        this.startTimer();
        this.gameStarted = true;
        this.solveButton.disabled = false;
        document.getElementById('previewContainer').style.display = 'none';
    }

    resetGame() {
        this.puzzleContainer.innerHTML = '';
        this.pieces = [];
        this.selectedPiece = null;
        clearInterval(this.timerInterval);
        this.timeSpan.textContent = '00:00';
        this.gameStarted = false;
    }

    createPuzzlePieces(gridSize) {
        const pieceWidth = this.originalImage.naturalWidth / gridSize;
        const pieceHeight = this.originalImage.naturalHeight / gridSize;
        const scaleFactor = 400 / this.originalImage.naturalWidth;
        
        this.puzzleContainer.style.width = `${this.originalImage.naturalWidth * scaleFactor}px`;
        this.puzzleContainer.style.height = `${this.originalImage.naturalHeight * scaleFactor}px`;

        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const piece = document.createElement('div');
                piece.className = 'puzzle-piece';
                piece.style.width = `${pieceWidth * scaleFactor}px`;
                piece.style.height = `${pieceHeight * scaleFactor}px`;
                piece.style.backgroundImage = `url(${this.originalImage.src})`;
                piece.style.backgroundSize = `${this.originalImage.naturalWidth * scaleFactor}px ${this.originalImage.naturalHeight * scaleFactor}px`;
                piece.style.backgroundPosition = `-${x * pieceWidth * scaleFactor}px -${y * pieceHeight * scaleFactor}px`;
                
                piece.dataset.correctX = x;
                piece.dataset.correctY = y;
                
                this.pieces.push(piece);
            }
        }

        this.shufflePieces();
        this.updatePiecesPosition();
        this.addPieceClickListeners();
    }

    shufflePieces() {
        for (let i = this.pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.pieces[i], this.pieces[j]] = [this.pieces[j], this.pieces[i]];
        }
    }

    updatePiecesPosition() {
        const gridSize = Math.sqrt(this.pieces.length);
        const pieceWidth = 100 / gridSize;
        const pieceHeight = 100 / gridSize;

        this.pieces.forEach((piece, index) => {
            const x = (index % gridSize) * pieceWidth;
            const y = Math.floor(index / gridSize) * pieceHeight;
            piece.style.left = `${x}%`;
            piece.style.top = `${y}%`;
            if (!piece.parentElement) {
                this.puzzleContainer.appendChild(piece);
            }
        });
    }

    addPieceClickListeners() {
        this.pieces.forEach(piece => {
            piece.addEventListener('click', () => this.handlePieceClick(piece));
        });
    }

    async handlePieceClick(piece) {
        if (!this.gameStarted) return;
        
        if (!this.selectedPiece) {
            this.selectedPiece = piece;
            piece.classList.add('selected');
        } else {
            if (this.selectedPiece !== piece) {
                const index1 = this.pieces.indexOf(this.selectedPiece);
                const index2 = this.pieces.indexOf(piece);
                
                await this.animateSwap(index1, index2);
                [this.pieces[index1], this.pieces[index2]] = [this.pieces[index2], this.pieces[index1]];
                this.updatePiecesPosition();
                
                if (this.checkWin()) {
                    this.handleWin();
                }
            }
            this.selectedPiece.classList.remove('selected');
            this.selectedPiece = null;
        }
    }

    checkWin() {
        const gridSize = Math.sqrt(this.pieces.length);
        return this.pieces.every((piece, index) => {
            const currentX = index % gridSize;
            const currentY = Math.floor(index / gridSize);
            return piece.dataset.correctX == currentX && piece.dataset.correctY == currentY;
        });
    }

    handleWin() {
        clearInterval(this.timerInterval);
        this.gameStarted = false;
        this.solveButton.disabled = true;
        setTimeout(() => {
            //alert(`¡Felicitaciones! Has completado el puzzle en ${this.timeSpan.textContent}`);
        }, 500);
    }

    startTimer() {
        this.startTime = Date.now();
        clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            this.timeSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    toggleOriginalImage() {
        if (this.originalImage.style.display === 'none') {
            this.originalImage.style.display = 'block';
            this.showOriginalButton.textContent = 'Ocultar Original';
        } else {
            this.originalImage.style.display = 'none';
            this.showOriginalButton.textContent = 'Mostrar Original';
        }
    }
}

// Iniciar el juego
new PuzzleGame();