import { Component, OnInit } from '@angular/core';
import {
  PreguntaFrecuente,
  FaqService,
} from '../../../Servicios/Preguntas/faq.service';

import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-preguntas-frecuentes',
  imports: [MatExpansionModule],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.css',
})
export class PreguntasFrecuentesComponent implements OnInit {
  Preguntas: PreguntaFrecuente[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit(): void { this.traerPreguntas(); }

  traerPreguntas(): void {
    this.faqService.getFaq().subscribe({
      next: (data) => {
        this.Preguntas = data.faq;
      },
      error: (err) => {
        console.log(err);
      },
    }); 
  }
}
