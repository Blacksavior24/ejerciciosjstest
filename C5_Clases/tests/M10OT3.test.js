const agregarStringInvertida = require('../ejercicios/03.js')

describe('agregarStringInvertida(StringPrototype)', function(){
	it('should add a reverse string method to the String prototype that returns a reversed version of the string', function() {
		agregarStringInvertida();
		const str = 'Hello';
		expect(str.reverse()).toBe('olleH');
	});
});
