import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  protected heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  protected aux: string = '';


  borrarHeroe(): void {
    console.log('Borrado');
    this.aux = this.heroes.shift() || '';
  }
}
