import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface FormContacto {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http :HttpClient) { }

  enviarSolicitud(Nombre: string, Apellido: string, Email: string, Telefono: string, nombrejuego: string | undefined)
{
  let body!: any;
  if (Nombre==""&&Apellido==""&&Email==""&&Telefono==""){
    console.log("Formulario inválido");
    return;}
  
    if(nombrejuego==null || nombrejuego==undefined)
    {
      body = {
      Nombre: Nombre,
      Email: Email,
      Telefono: Telefono,
      Apellido: Apellido,
      Fecha: Date.now
  };
    }
    else{
      body = {
      Nombre: Nombre,
      juego_Deseado: nombrejuego,
      Email: Email,
      Telefono: Telefono,
      Apellido: Apellido,
      Fecha: Date.now};
    }

  

  this.http.post(
    "https://formspree.io/f/xdkjrkjp",
    body,
    { headers: new HttpHeaders({ "Accept": "application/json" }) }
  ).subscribe(
    () => {
      console.log("Mensaje enviado ✔");
    },
    err => console.error(err)
  );
}


}
