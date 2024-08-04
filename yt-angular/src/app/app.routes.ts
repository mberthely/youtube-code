import { Routes } from '@angular/router';
import { AcercaComponent } from './features/acerca/acerca.component';
import { CalculadoraComponent } from './features/calculadora/calculadora.component';
import { ClienteComponent } from './features/cliente/cliente.component';
import { DeferExampleComponent } from './features/defer-example/defer-example.component';
import { ProductoComponent } from './features/producto/producto.component';

export const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'defer', component: DeferExampleComponent },
];
