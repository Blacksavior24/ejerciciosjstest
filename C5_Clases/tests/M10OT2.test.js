const agregarMetodoPrototype = require('../ejercicios/02.js')

describe('agregarMetodoPrototype(Constructor)', function() {
	it('should add the method saludar to the constructor', function() {
		function Test() {
			this.test = true;
		}
		agregarMetodoPrototype(Test);
		const test = new Test();
		expect(test.saludar()).toBe('Hello World!');
	});
});