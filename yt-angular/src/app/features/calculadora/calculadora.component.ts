import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent implements OnInit {

  public operador = "";
  public valorNumericoPrimario = 0;
  public valorNumericoSecundario = 0;
  public valorPrimarioActivo = true;

  constructor() { }

  ngOnInit(): void {
  }

  presionarNumero(numero: number): void {
    if (this.valorPrimarioActivo) {
      if (this.valorNumericoPrimario) {
        this.valorNumericoPrimario = +(this.valorNumericoPrimario.toString() + numero.toString())
      } else {
        this.valorNumericoPrimario = numero;
      }
    } else {
      if (this.valorNumericoSecundario) {
        this.valorNumericoSecundario = +(this.valorNumericoSecundario.toString() + numero.toString())
      } else {
        this.valorNumericoSecundario = numero;
      }
    }
  }

  presionarOperador(operador: string): void {
    this.valorPrimarioActivo = false;
    this.operador = operador;
  }

  mostrarResultado() {
    if (this.operador === '+') {
      this.valorNumericoPrimario = this.valorNumericoPrimario + this.valorNumericoSecundario;
    }

    if (this.operador === '-') {
      this.valorNumericoPrimario = this.valorNumericoPrimario - this.valorNumericoSecundario;
    }

    if (this.operador === '/') {
      this.valorNumericoPrimario = this.valorNumericoPrimario / this.valorNumericoSecundario;
    }

    if (this.operador === '*') {
      this.valorNumericoPrimario = this.valorNumericoPrimario * this.valorNumericoSecundario;
    }

    this.valorPrimarioActivo = true;
  }

  reset() {
    this.operador = "";
    this.valorNumericoPrimario = 0;
    this.valorNumericoSecundario = 0;
    this.valorPrimarioActivo = true;
  }
}
