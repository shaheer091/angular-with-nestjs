import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router, private http: HttpClient) {}
  api = environment.apiUrl;

  setUserProfile(imageUrl: any): Observable<any> {
    return this.http.post(`${this.api}/user/updateUserProfile`, { imageUrl });
  }

  getHome(): Observable<any> {
    return this.http.get(`${this.api}/user/getHome`);
  }
}
