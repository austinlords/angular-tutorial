import { Component } from '@angular/core';

import { NavigationRoutes } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-udemy';
  name = 'Austin';
  currentRoute: NavigationRoutes = 'recipes';

  handleHavigation(route: NavigationRoutes) {
    this.currentRoute = route;
  }
}
