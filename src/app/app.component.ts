import { Component } from '@angular/core';

@Component({
  selector: 'dekd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'welcome dekd';
  interns = ['Mackie', 'Boat', 'Bas']
  clicked = false
  onClick() {
    this.clicked = !this.clicked
  }
}
