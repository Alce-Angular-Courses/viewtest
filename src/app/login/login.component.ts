
import { Component, OnInit } from '@angular/core';
import { AuthServiveService } from '../services/auth-servive.service';

@Component({
	selector: 'vwn-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private authx: AuthServiveService) { }

	ngOnInit(): void {
		//
	}

}
