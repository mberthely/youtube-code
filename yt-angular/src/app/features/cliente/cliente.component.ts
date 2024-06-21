import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../models/cliente.model';
import { ClienteFormComponent } from './cliente-dialog/cliente-dialog.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [MatTableModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule],
  // providers: [ClienteService],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'actions'];
  data: Cliente[] = [];

  constructor(
    // private dataService: ClienteService,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this.dataService.get().subscribe(d => {
    //   this.data = d;
    // });
  }

  add(): void {
    const dialogRef = this.dialog.open(ClienteFormComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.dataService.add(result).then(() => {
        //   this.getData();
        // });
      }
    });
  }

  edit(item: Cliente): void {
    const dialogRef = this.dialog.open(ClienteFormComponent, {
      width: '350px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.dataService.update(result).then(() => {
        //   this.getData();
        // });
      }
    });
  }

  delete(id: string): void {
    // this.dataService.delete(id).then(() => {
    //   this.getData();
    // });
  }
}
