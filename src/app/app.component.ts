import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gaming-roca';

  mostrar: boolean = true;

  ActivarMenu():void{
    if(this.mostrar)
    {
      this.mostrar = false;
    }
    else
    {
      this.mostrar = true;
    }
  }

  Discord():void{
    window.open("https://discord.gg/JRSZJdAaAG","_blank");
  }

  ig():void{
    window.open("https://www.instagram.com/dana.it18?igsh=MWJid25kamsyb25zbw%3D%3D&utm_source=qr","_blank");
  }
}
