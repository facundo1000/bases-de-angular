import { Component } from '@angular/core';



@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
    protected titulo: string = 'Acumulador';
    protected num: number = 0;
    protected base: number = 5;

    protected acumular(value: number): void {
        this.num += value;
    }
}