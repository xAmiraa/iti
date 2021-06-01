import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }
  loginUser(user:user):Observable<any>{
    return this.http.post<any>('http://localhost:3000/users/login',user);
  }
}
