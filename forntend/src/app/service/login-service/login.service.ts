import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logindto } from 'src/app/dto/logindto';
import { Observable } from 'rxjs';
import { MAIN_URL } from '../registation-service/registation.service';
const URL="/login"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(logindto:Logindto):Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL+URL+"/islogin",logindto);
  }
}
