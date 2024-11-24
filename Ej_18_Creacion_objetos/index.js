// Definición de la clase Coche
class Coche {
    // Propiedades privadas
    #marca;
    #modelo;
    #año;
  
    // Propiedad pública
    color;
  
    // Constructor que recibe valores para las propiedades privadas
    constructor(marca, modelo, año, color) {
      this.#marca = marca;
      this.#modelo = modelo;
      this.#año = año;
      this.color = color; // Propiedad pública
    }
  
    // Getters y setters para las propiedades privadas
    get marca() {
      return this.#marca;
    }
  
    set marca(nuevaMarca) {
      this.#marca = nuevaMarca;
    }
  
    get modelo() {
      return this.#modelo;
    }
  
    set modelo(nuevoModelo) {
      this.#modelo = nuevoModelo;
    }
  
    get año() {
      return this.#año;
    }
  
    set año(nuevoAño) {
      this.#año = nuevoAño;
    }
  
    // Método privado
    #obtenerDatosPrivados() {
      return `Marca: ${this.#marca}, Modelo: ${this.#modelo}, Año: ${this.#año}`;
    }
  
    // Método público
    obtenerInfoCompleta() {
      return `${this.#obtenerDatosPrivados()}, Color: ${this.color}`;
    }
  }
  
  // Probar la clase Coche
  window.onload = function () {
    // Crear una instancia de la clase
    const miCoche = new Coche('Toyota', 'Corolla', 2022, 'Rojo');
  
    // Cambiar una propiedad privada usando el setter
    miCoche.marca = 'Honda';
  
    // Obtener información completa usando el método público
    console.log(miCoche.obtenerInfoCompleta());
  
    // Mostramos el resultado en el navegador
    document.getElementById('output').textContent = miCoche.obtenerInfoCompleta();
  };
  