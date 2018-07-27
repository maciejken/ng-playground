import { Component, OnInit } from '@angular/core';
import { MENU } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = MENU;

  constructor() { }

  ngOnInit() {
  }

}
