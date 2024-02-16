// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:
    
    }
}
    
function crearInstanciaPersona(nombre, apellido, edad, dir) {
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
}
      
function agregarMetodo() {
    //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
    //Ej: "Juan, 22 años"
}

module.exports = {
    Persona,
    crearInstanciaPersona,
    agregarMetodo
}