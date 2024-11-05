import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {


  cosas = [
    {name:'Silla', precio: '25€'},
    {name: 'Ordenador', precio: '245€'},
    {name: 'Mesa', precio: '35€'},
    {name: 'Pantalla', precio: '89€'},
    {name: 'Ratón', precio: '14€'},
    {name: 'Teclado', precio:'12€'}
  ];

  @Output() itemSelected = new EventEmitter<object>();

  onSelect(item: object){
    this.itemSelected.emit(item);
  }
}
