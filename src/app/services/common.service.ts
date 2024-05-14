import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  api = environment.apiUrl;
  decodedToken = this.parseJwt();
  isAdmin = this.decodedToken ? this.decodedToken.isAdmin : '';

  signUpUser(data: any): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.api}/login`, data);
  }

  parseJwt() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isUser() {
    console.log(this.decodedToken.role);
    return this.decodedToken?.role;
  }
}
