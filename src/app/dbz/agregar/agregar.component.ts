import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(private service: DbzService) { }


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: '0'
  }

  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.service.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: '' };
  }
}
