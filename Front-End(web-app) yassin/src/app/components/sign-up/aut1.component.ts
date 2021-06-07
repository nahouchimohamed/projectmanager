import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/register';
const AUTH_API1 = 'http://localhost:5000/api/signin';
const AUTH_API2 = 'http://localhost:5000/api/changeinfo';
const AUTH_API3 = 'http://localhost:5000/api/proregister'



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API1 , {
      email,
      password
    }, httpOptions);
  }

  register(admin:Boolean,Cin: Number ,team:string,Firstname: string, Lastname: string,phone: Number,email: string, password: string,password2: string): Observable<any> {
    return this.http.post(AUTH_API , {
      admin,
      Cin,
      team,
      Firstname,
      Lastname,
      phone,
      email,
      password,
      password2
    }, httpOptions)
   
  }

  Update(Firstname: string, Lastname: string,phone: Number,email: string, password: string,password2: string,token:string): Observable<any> {
    return this.http.post(AUTH_API2, {
      Firstname,
      Lastname,
      phone,
      email,
      password,
      password2,
      token
    }, httpOptions)
   
  }
 
  
}