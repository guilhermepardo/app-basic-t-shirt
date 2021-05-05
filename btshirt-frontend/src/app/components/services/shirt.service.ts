import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Shirt } from '../models/shirt.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  BASE_URL: string = 'http://localhost:3000/products'

  constructor(
    private http: HttpClient,
    private snackBar : MatSnackBar
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

  popInfo(info : string) : void {
    this.snackBar.open(info, "ok!", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
