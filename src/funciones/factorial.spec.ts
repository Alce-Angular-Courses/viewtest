import { factorial } from './factorial';


xdescribe('Factorial function', () => {
	it('should be 1 if n = 0', () => {
		expect(factorial(0)).toBe(1);
	});

	it('should be 1 if n = 1', () => {
		expect(factorial(1)).toBe(1);
	});

	it('should be 120 if n = 5', () => {
		expect(factorial(5)).toBe(120);
	});

	it('should throw error if n = -1', () => {
		expect(() => factorial(-1) ).toThrow();
		expect(() => factorial(-1)).toThrow('No existe factoriales de números negativos');
	});

	it('should throw error if n = 1.5', () => {
		expect(() => factorial(1.5)).toThrowError();
		expect(() => factorial(1.5)).toThrowError(Error, 'No existen factoriales de números decimales');
	});

});