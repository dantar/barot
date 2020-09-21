import { Component } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pwa-barot';

  constructor(public shared: SharedDataService) {
    this.shared.startGame();
  }

}
