import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

    api = "http://localhost:3000/grades";
   
  
    getData(): Observable<any>{
      return this.http.get(`${this.api}`);
    
   }

}
