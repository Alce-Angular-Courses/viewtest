import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { iUser } from '../models/user';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let formEl: DebugElement 
  let submitEl: DebugElement  
  let loginEl: DebugElement  
  let passwordEl: DebugElement  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
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
      loginEl.nativeElement.value = "test@example.com";
      passwordEl.nativeElement.value = "123456";

      component.loggedIn.subscribe((value) => {
          user = value
      });
      formEl.triggerEventHandler('submit', null)
      expect(user.email).toBe("test@example.com");
      expect(user.passwd).toBe("123456");

  });
    
});
