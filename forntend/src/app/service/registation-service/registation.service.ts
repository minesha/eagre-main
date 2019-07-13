import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistationDto } from 'src/app/dto/registation-dto';
import { Observable } from 'rxjs';

export const MAIN_URL="http://localhost:8080"
const URL="/registation"

@Injectable()
export class RegistationService {

  constructor(private http:HttpClient) { }

  registation(registationDto:RegistationDto):Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL+URL+"/addReg",registationDto);
  }
}
