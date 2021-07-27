import { TestBed } from '@angular/core/testing';
import { AuthServiveService } from './auth-servive.service';

describe('AuthServiveService', () => {
	let service: AuthServiveService;
	const storeName = 'Token';

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AuthServiveService);
		//service = new AuthServiveService();
		localStorage.removeItem(storeName);
	}); 

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should be true isLogin if there are token..', () => {
		localStorage.setItem(storeName, 'qweqweqw332311ewq');
		expect(service.isAuth()).toBeTrue();
	});

	it('should be false is Login if there are not  token..', () => {
		expect(service.isAuth()).toBeFalse();
	});
});
