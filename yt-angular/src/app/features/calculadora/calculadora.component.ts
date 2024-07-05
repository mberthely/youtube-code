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
  public valorNumericoPrimario = '0';
  public valorNumericoSecundario = '0';
  public valorPrimarioActivo = true;

  constructor() { }

  ngOnInit(): void {
  }

  presionarNumero(numero: number): void {
    if (this.valorPrimarioActivo) {
      if (this.valorNumericoPrimario) {
        this.valorNumericoPrimario = (+(this.valorNumericoPrimario.toString() + numero.toString())).toString()
      } else {
        this.valorNumericoPrimario = numero.toString();
      }
    } else {
      if (this.valorNumericoSecundario) {
        this.valorNumericoSecundario = (+(this.valorNumericoSecundario.toString() + numero.toString())).toString()
      } else {
        this.valorNumericoSecundario = numero.toString();
      }
    }
  }

  presionarOperador(operador: string): void {
    this.valorPrimarioActivo = false;
    this.operador = operador;
    this.valorNumericoSecundario = '0'
  }

  mostrarResultado() {
    if (this.operador === '+') {
      this.valorNumericoPrimario = (+this.valorNumericoPrimario + +this.valorNumericoSecundario).toString();
    }

    if (this.operador === '-') {
      this.valorNumericoPrimario = (+this.valorNumericoPrimario - +this.valorNumericoSecundario).toString();
    }

    if (this.operador === '/') {
      this.valorNumericoPrimario = (+this.valorNumericoPrimario / +this.valorNumericoSecundario).toString();
    }

    if (this.operador === '*') {
      this.valorNumericoPrimario = (+this.valorNumericoPrimario * +this.valorNumericoSecundario).toString();
    }

    this.valorPrimarioActivo = true;
  }

  presionarPunto() {
    if (this.valorPrimarioActivo) {
      if (this.valorNumericoPrimario.indexOf('.') === -1) {
        this.valorNumericoPrimario += '.'
      }
    } else {
      if (this.valorNumericoSecundario.indexOf('.') === -1) {
        this.valorNumericoSecundario += '.'
      }
    }
  }

  cambioDeSigno() {
    if (this.valorPrimarioActivo) {
      this.valorNumericoPrimario = ((+this.valorNumericoPrimario) * -1).toString()
    } else {
      this.valorNumericoSecundario = ((+this.valorNumericoSecundario) * -1).toString()
    }
  }

  reset() {
    this.operador = "";
    this.valorNumericoPrimario = '0';
    this.valorNumericoSecundario = '0';
    this.valorPrimarioActivo = true;
  }
}
