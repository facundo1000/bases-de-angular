import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() data: Personaje[] = [];
  constructor(private service: DbzService) { }

  get personajes() {
    return this.service.personajes;
  }
}
