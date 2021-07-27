import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthServiveService {
	storeName: string;
	constructor() {
		this.storeName = 'Token';
	}

	isLogin (): boolean {
		return Boolean(localStorage.getItem(this.storeName ));
	}

	login(token: string): void {
		localStorage.setItem(this.storeName, token);
	}
}
