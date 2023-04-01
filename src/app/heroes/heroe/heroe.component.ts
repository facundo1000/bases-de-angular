import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']

})
export class HeroeComponent {

    protected nombre: string = 'IronMan';
    protected edad: number = 23;


    // para invocarlo, se invoca sin los parentesis, al ser un getter, es una propiedad
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {
        return `${this.nombre} -  ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }


    cambiarEdad(): void {
        console.log('Hey..');
        this.edad = 45;
    }
}