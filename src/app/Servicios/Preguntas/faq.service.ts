import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PreguntaFrecuente {
  id: number;
  pregunta: string;
  respuesta: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private faqUrl = 'data/preguntas.json';

  constructor(private http:HttpClient) { }

  getFaq(): Observable<{ faq: PreguntaFrecuente[] }> {
    return this.http.get<{ faq: PreguntaFrecuente[] }>(this.faqUrl);
  }
}
