import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationRoutes } from '../app.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navigationClick = new EventEmitter<NavigationRoutes>();

  constructor() {}

  ngOnInit(): void {}

  onNavigationClick(route: NavigationRoutes) {
    this.navigationClick.emit(route);
  }
}
