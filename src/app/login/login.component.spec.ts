import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthServiveService } from '../services/auth-servive.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let service: AuthServiveService;
	let botonElement : DebugElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ LoginComponent ],
			providers: [AuthServiveService]
		})
			.compileComponents();
	});

	beforeEach(() => {
		service = TestBed.inject(AuthServiveService)
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		botonElement = fixture.debugElement.query(By.css('#boton-login'))
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('isLogin() returns true when user is login', () => {
    const spy = spyOn(service,'isAuth').and.returnValue(true)
    expect(component.isLogin()).toBeTrue()
    expect(service.isAuth).toHaveBeenCalled()
  });
		
	it('isLogin() returns false when user is not login', () => {
    const spy = spyOn(service,'isAuth').and.returnValue(false)
		const spy2 = spyOn(service,'setToken')
    expect(component.isLogin()).toBeFalse()
		expect(service.setToken).not.toHaveBeenCalled()
    expect(service.isAuth).toHaveBeenCalled()
  });

	it('text  boton is "Logout" when user is login', () => {
		const spy = spyOn(service,'isAuth').and.returnValue(true)
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('#boton-login').textContent).toBe('Logout')
		expect(botonElement.nativeElement.textContent).toBe('Logout')
	});

	it('text  boton is "Login" when user is not login', () => {
		const spy = spyOn(service,'isAuth').and.returnValue(false)
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('#boton-login').textContent).toBe('Login')
		expect(botonElement.nativeElement.textContent).toBe('Login')
	});
});
