import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
    
})

export class StarComponent implements OnChanges {

    //Quando temos uma variável que vai ser usada fora do componente para receber algum valor, precisamo anotá-la com @input.
    @Input()

    rating: number = 0;
    starWidth: number;



    // Detecta o momento de mudança do componente
    ngOnChanges():void {
        this.starWidth = this.rating * 74 / 5;
    }
}