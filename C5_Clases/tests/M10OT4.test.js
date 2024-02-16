const crearInstanciaPersona = require('../ejercicios/04.js')
const Persona = require('../ejercicios/04.js')
const agregarMetodo = require('../ejercicios/04.js')

describe('crearInstanciaPersona()', function() {
	it('should return a new instance of Persona', function() {
		expect(crearInstanciaPersona("Juan", "Pérez", 22, "Saavedra 123")).toBeInstanceOf(Persona);
	});
});

describe('agregarMetodo(Persona)', function() {
	it('should add the method datos to the constructor', function() {
		agregarMetodo();
		const persona = new Persona("Juan", "Pérez", 22, "Saavedra 123");
		expect(persona.datos()).toBe('Juan, 22 años');
	});
});