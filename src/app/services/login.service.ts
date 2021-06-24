import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginUrl = "http://localhost:3001/session/login"

  constructor(private http: HttpClient) { }

  execLogin(data: any) {
    return this.http.post(this.loginUrl, data)
  }
}
