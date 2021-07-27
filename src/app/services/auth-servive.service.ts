import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthServiveService {
	storeName: string;
	constructor() {
		this.storeName = 'Token';
	}

	isAuth (): boolean {
		return Boolean(localStorage.getItem(this.storeName ));
	}

	isAuthAsync (): Promise<boolean> {
		return Promise.resolve(Boolean(localStorage.getItem(this.storeName )))
	}

	isAuthRx (): Observable<Boolean> {
		return of(Boolean(localStorage.getItem(this.storeName )))
	}


	setToken() : void {}

	login(token: string): void {
		localStorage.setItem(this.storeName, token);
	}
}
