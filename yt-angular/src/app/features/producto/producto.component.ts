import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface Producto {
  nombre: string;
  precio: number;
}

const ELEMENT_DATA: Producto[] = [
  { nombre: "Prueba", precio: 10 },
  { nombre: "Prueba 2", precio: 20 },
];

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})

export class ProductoComponent {
  displayedColumns: string[] = ['nombre', 'precio', 'acciones'];
  dataSource = ELEMENT_DATA;
}
