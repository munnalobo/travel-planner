import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'destination-explorer';
  buttonClick = false;

  color(){
    if(this.buttonClick === true) {
      return this.buttonClick = false;
    }
    return this.buttonClick = true;
  }
}
