import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LawyersService {

  constructor(private _HttpClient: HttpClient) { }

  getLawyers(): Observable<any>{
    return this._HttpClient.get('https://lawyer-services.onrender.com/lawyers');
  }

  getSpacificLawyer(id: number): Observable<any>{
    return this._HttpClient.get(`https://lawyer-services.onrender.com/lawyers/${id}`);
  }
}
