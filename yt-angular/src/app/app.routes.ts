import { Routes } from '@angular/router';
import { ClienteComponent } from './features/cliente/cliente.component';
import { ProductoComponent } from './features/producto/producto.component';

export const routes: Routes = [
    { path: 'cliente', component: ClienteComponent },
    { path: 'producto', component: ProductoComponent },
];
