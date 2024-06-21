import { Routes } from '@angular/router';
import { ClienteComponent } from './features/cliente/cliente.component';
import { ProductoComponent } from './features/producto/producto.component';
import { AcercaComponent } from './features/acerca/acerca.component';

export const routes: Routes = [
    { path: 'cliente', component: ClienteComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'acerca', component: AcercaComponent },
];
