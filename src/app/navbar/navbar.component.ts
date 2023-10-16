import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  text : string = "";
  @Output() onTextChange : EventEmitter<string> = new EventEmitter();
  updateTextSearch(textChanged : any){
    this.text = textChanged.target.value;
    this.onTextChange.emit(this.text);
  }
}
