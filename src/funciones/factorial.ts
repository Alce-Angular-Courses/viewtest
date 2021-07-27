export function factorial(n: number): number {
	if(n < 0) {
		throw 'No existe factoriales de números negativos';
	} else if (parseInt(String(n)) !== n ) {
		throw new Error('No existen factoriales de números decimales');
	}
	return n === 0 ? 1 : n * factorial(n-1);
}