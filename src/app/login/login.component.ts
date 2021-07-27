import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiveService } from '../services/auth-servive.service';

@Component({
	selector: 'vwn-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('boton', {static: true}) boton!: ElementRef
	constructor(private authx: AuthServiveService) { }

	ngOnInit(): void {
		console.log('Boton', this.boton)
	}

	isLogin() {
		return this.authx.isAuth()
	}
}
