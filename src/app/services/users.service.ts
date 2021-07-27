import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url!: string;
  constructor(private http: HttpClient) {
    this.url='https://jsonplaceholder.typicode.com/users'
   }

   getAll(): Observable<any> {
     return this.http.get(this.url)
   }
}
