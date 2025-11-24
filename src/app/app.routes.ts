import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './features/quienesSomos/quienes-somos/quienes-somos.component';
import { InicioComponent } from './features/Inicio/inicio/inicio.component';
import { FormContratacionComponent } from './features/Form-contratacion/form-contratacion/form-contratacion.component';
import { JuegosDisponibleComponent } from './features/juegosDisponible/juegos-disponible/juegos-disponible.component';
import { PreguntasFrecuentesComponent } from './features/Preguntas/preguntas-frecuentes/preguntas-frecuentes.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
    },
    {
        path:'inicio',
        component:InicioComponent,
    },
    {
        path: 'quienesSomos',
        component:QuienesSomosComponent,
    },
    {
        path:'contratar',
        component:FormContratacionComponent,
    },
    {
        path:'juegos-disponibles',
        component:JuegosDisponibleComponent,
    },
    {
        path:'preguntas',
        component: PreguntasFrecuentesComponent,
    }
];
