import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AuthServiveService } from '../services/auth-servive.service';

import { Login2Component } from './login2.component';

describe('Login2Component', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;
  let service: AuthServiveService
  let elemBotonRx: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login2Component ],
      providers: [AuthServiveService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(AuthServiveService)
    fixture = TestBed.createComponent(Login2Component);
    component = fixture.componentInstance;
    elemBotonRx = fixture.debugElement.query(By.css('#boton-login-rx'))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLogin() returns true when user is login', fakeAsync (() => {
        const spy = spyOn(service,'isAuthAsync').and.resolveTo(true)
        component.ngOnInit();
        tick();
        expect(component.isLogin).toBeTrue()
        expect(service.isAuthAsync).toHaveBeenCalled()
      }));
        
  it('isLogin() returns false when user is not login', fakeAsync (() => {
    const spy = spyOn(service,'isAuthAsync').and.resolveTo(false)
    component.ngOnInit();
    tick();
    expect(component.isLogin).toBeFalse()
    expect(service.isAuthAsync).toHaveBeenCalled()
  }));

it('isLogin() returns true when user is login', fakeAsync (() => {
      const spy = spyOn(service,'isAuthRx').and.returnValue(of(true))
      tick();
      fixture.detectChanges()
      expect(elemBotonRx.nativeElement.textContent).toContain('Logout')
      expect(service.isAuthRx).toHaveBeenCalled()
    }));

});
