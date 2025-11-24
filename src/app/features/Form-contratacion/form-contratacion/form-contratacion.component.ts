import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { MailService } from '../../../Servicios/Mail/mail.service';
import { Router } from '@angular/router';
import { Juego } from '../../../Servicios/Juegos/juegos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-contratacion',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './form-contratacion.component.html',
  styleUrl: './form-contratacion.component.css',
})
export class FormContratacionComponent {
  receivedData: Juego | null = null;

  constructor(private mails: MailService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as Juego | undefined;

    this.receivedData = state ?? null;
  }

  Nombre: string = '';
  Apellido: string = '';
  Telefono: string = '';
  Email: string = '';

  form: FormGroup = new FormGroup({
    control: new FormControl(null, Validators.required),
  });

  get isRequired(): boolean {
    const control = this.form.get('control');
    if (!control) return false;

    // Método propio de AbstractControl en versiones nuevas
    // @ts-ignore si el compilador se queja pero tu Angular lo soporta
    return control.hasValidator && control.hasValidator(Validators.required);
  }

  Send(formContact: any) {
    if (!formContact.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema en la carga del formulario',
      });
      return;
    }

    this.mails.enviarSolicitud(
      this.Nombre,
      this.Apellido,
      this.Email,
      this.Telefono,
      this.receivedData?.nombre
    );

    Swal.fire({
      title: 'Formulario enviado',
      text: 'Pronto nos contactaremos con usted',
      icon: 'success',
    });
  }
}
