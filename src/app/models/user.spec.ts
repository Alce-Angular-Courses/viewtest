import { User } from './user';

describe('User', () => {

	it('should create an instance', () => {
		const user = new User();
		expect(user).toBeTruthy();
	});

	it('should create an instance with values', () => {
		const user = new User(1, 'Jose', );
		expect(user).toBeTruthy();
    expect(user.name).toBe('Jose');
		expect(user.name).not.toBe('Josee');
	});

  it('should change propertie values', () => {
		const user = new User(1, 'Jose', );
		expect(user).toBeTruthy();
		expect(user.name).toBe('Jose');
    user.name = 'Luis';
    expect(user.name).not.toBe('Jose');
    expect(user.name).toBe('Luis');
	});

});
