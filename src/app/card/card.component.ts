import { Component, Input } from '@angular/core';

interface books{
  ISBN : number;
  title : string;
  author : string;
  summary : string;
  image : string;
  price : {
    currency : string;
    value : number;
    displayValue : string;
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book : books | undefined ;


}
