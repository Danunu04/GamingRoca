import { Component, OnInit } from '@angular/core';
import { JuegosService, Juego } from '../../../Servicios/Juegos/juegos.service';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juegos-disponible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juegos-disponible.component.html',
  styleUrl: './juegos-disponible.component.css'
})
export class JuegosDisponibleComponent implements OnInit{

  constructor(private Juegoss:JuegosService, private route:Router){}

  ngOnInit(): void {
    this.traerJuegos();
  }

  juegos:Juego[]=[];

  traerJuegos():void{
    this.Juegoss.getJuegos().subscribe({
      next: (data)=> {
        this.juegos=data;
      },
      error: (err) => {console.log(err)}
    })
  }

    contratar(item:Juego):void{
      this.route.navigate(['/contratar'], {state: item});
    }
}
