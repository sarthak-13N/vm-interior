import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from '../models/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private url='http://localhost:3000/services';

  constructor(private http:HttpClient) { }

  getServices():Observable<Services[]>{
    return this.http.get<Services[]>(this.url);
  }
  getServicesById(id:number):Observable<Services>{
    return this.http.get<Services>(`${this.url}/${id}`);
  }



  createService(user: Services): Observable<Services> { 
    return this.http.post<Services>(this.url, user); 
    } 
}
