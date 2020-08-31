import { Observable } from 'rxjs';
import { IForm } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') }

  constructor(public http:HttpClient) { }
   
  onSub(user:IForm){
      return this.http.post<any>('http://localhost:3000/form',user);  
   }
               
  
              
      
}
