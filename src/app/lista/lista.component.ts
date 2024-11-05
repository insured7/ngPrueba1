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

  cosas = ['Silla', 'Ordenador', 'Mesa', 'Pantalla', 'Ratón', 'Teclado'];
  @Output() itemSelected = new EventEmitter<string>();

  onSelect(item: string){
    this.itemSelected.emit(item);
  }
}
