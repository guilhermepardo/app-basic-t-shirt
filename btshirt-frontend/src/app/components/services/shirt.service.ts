import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Shirt } from '../models/shirt.model';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  BASE_URL: string = 'http://localhost:3000/products'

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(this.BASE_URL)
  }

  post(shirt: Shirt): Observable<Shirt> {
    return this.http.post<Shirt>(this.BASE_URL, shirt)
  }

  delete(shirt: Shirt): Observable<Shirt> {
    return this.http.delete<Shirt>(`${this.BASE_URL}/${shirt.id}`)
  }

  put(shirt: Shirt): Observable<Shirt> {
    return this.http.put<Shirt>(`${this.BASE_URL}/${shirt.id}`, shirt)
  }

}
