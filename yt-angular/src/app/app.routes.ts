import { Routes } from '@angular/router';
import { PersonaComponent } from './features/persona/persona.component';
import { ClienteComponent } from './features/cliente/cliente.component';
import { ProductoComponent } from './features/producto/producto.component';

export const routes: Routes = [
    {
        path: 'persona', component: PersonaComponent
    },

    { path: 'cliente', component: ClienteComponent },
    { path: 'producto', component: ProductoComponent },
];
