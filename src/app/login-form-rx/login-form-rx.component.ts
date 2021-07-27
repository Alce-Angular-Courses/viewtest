import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iUser } from '../models/user';

@Component({
  selector: 'vwn-login-form-rx',
  templateUrl: './login-form-rx.component.html',
  styleUrls: ['./login-form-rx.component.scss']
})
export class LoginFormRxComponent implements OnInit {
    loginForm!: FormGroup
    @Input() enabled!: boolean;
    @Output() loggedIn: EventEmitter<iUser>
   
    constructor(private fb: FormBuilder) { 
      this.loggedIn = new EventEmitter()
    }
    ngOnInit(): void {
      this.enabled = true
      this.loginForm = this.fb.group({
        email: ['', [ Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
        passwd: ['', [Validators.required, Validators.minLength(8)]],
      })
    }

    login(): void {
      const userData = this.loginForm.value
      this.loggedIn.emit({...userData})
      this.loginForm.reset()
    }

}
