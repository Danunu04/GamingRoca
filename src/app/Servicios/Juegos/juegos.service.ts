import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Juego {
  id: number;
  nombre: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private dataUrl = 'data/data.json';
  
  constructor(private http: HttpClient) {}

  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.dataUrl);
  }
}
