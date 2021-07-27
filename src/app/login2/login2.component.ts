import { Component, OnInit } from '@angular/core';
import { AuthServiveService } from '../services/auth-servive.service';

@Component({
  selector: 'vwn-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  isLogin!: boolean;
  constructor(private auth:AuthServiveService) { }

  ngOnInit(): void {
    this.auth.isAuthAsync().then(
      result => this.isLogin = result
    )
  }

  isLoginRx() {
    return this.auth.isAuthRx()
  }
}
