import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iUser, User } from '../models/user';

@Component({
  selector: 'vwn-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    @Input() enabled: boolean = true;
    @Output() loggedIn: EventEmitter<iUser>
    @ViewChild('loginForm', {static: true}) loginForm!: NgForm
    constructor() { 
      this.loggedIn = new EventEmitter()
    }
    ngOnInit(): void {
      this.enabled = true
    }
    login(userData: iUser) {
      // this.loggedIn.emit({...this.loginForm.value})
      console.log(userData)
      this.loggedIn.emit({...userData})
      this.loginForm.reset()

    
    }
  

}
