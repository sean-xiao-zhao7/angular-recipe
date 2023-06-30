import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Recipes';
  section = 'shop';

  onChangeSection(section: string) {
    this.section = section;
  }
}
