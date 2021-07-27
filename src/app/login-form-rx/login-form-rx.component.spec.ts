import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { iUser } from '../models/user';

import { LoginFormRxComponent } from './login-form-rx.component';

describe('LoginFormRxComponent', () => {
  let component: LoginFormRxComponent;
  let fixture: ComponentFixture<LoginFormRxComponent>;
  let formEl: DebugElement 
  let submitEl: DebugElement  
  let loginEl: DebugElement  
  let passwordEl: DebugElement  
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormRxComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    formEl = fixture.debugElement.query(
      By.css('form'));
    submitEl = fixture.debugElement.query(
      By.css('button'));
    loginEl = fixture.debugElement.query(
      By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(
      By.css('input[type=password]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('an input enabled false should disabled de button', () => {
    component.enabled = false //@Input
    fixture.detectChanges()
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });
    
  it('Entering email and password emits loggedIn event', () => {
        let user!: iUser;
        component.loginForm.get('email')?.setValue('test@example.com')
        component.loginForm.get('passwd')?.setValue('123456')
        // loginEl.nativeElement.value = ;
        // passwordEl.nativeElement.value = ;
  
        component.loggedIn.subscribe((value) => {
            user = value
        });
        formEl.triggerEventHandler('submit', null)
        expect(user.email).toBe("test@example.com");
        expect(user.passwd).toBe("123456");
    });

  it('form invalid when empty', () => {
        expect(component.loginForm.valid).toBeFalsy();
      });

  it('email invalid when empty', () => {
        let email: AbstractControl = 
      component.loginForm.get('email') as AbstractControl;
        expect(email.valid).toBeFalsy();
      });
  
  it('email error required when empty', () => {
        let email: AbstractControl = 
      component.loginForm.get('email') as AbstractControl;
        expect(email.hasError('required')).toBeTruthy();
      });

  it('email error pattern when invalid formar', () => {
        let email: AbstractControl = 
      component.loginForm.get('email') as AbstractControl;
        email.setValue('pepe')
        expect(email.hasError('pattern')).toBeTruthy();
      });
     
});
