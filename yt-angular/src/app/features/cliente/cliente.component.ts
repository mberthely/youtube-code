import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(ClienteDialogComponent, {
      data: {},
    });
  }

}
