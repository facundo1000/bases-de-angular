import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    constructor() { }

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: '15000' },
        { nombre: 'Vegetta', poder: '7500' }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes]; //operador 'spread' separa cada elemento del arreglo, se utiliza para romper la referencia con el array.
    }

    agregarPersonaje(per: Personaje): void {
        this._personajes.push(per);
    }
}