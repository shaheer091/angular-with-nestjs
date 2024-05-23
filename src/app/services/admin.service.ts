import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  api = environment.apiUrl;
  savePost(data: any): Observable<any> {
    return this.http.post(`${this.api}/admin/addPost`, data);
  }
  seePost(): Observable<any> {
    return this.http.get(`${this.api}/admin/seePost`);
  }
  deletePost(id: any): Observable<any> {
    return this.http.delete(`${this.api}/admin/deletePost/${id}`);
  }
  editPost(id: any, data: any) {
    return this.http.patch(`${this.api}/admin/editPost/${id}`, data);
  }
}
