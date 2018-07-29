import { Component, OnInit } from '@angular/core';
import { MENU } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = MENU;
  level2;

  constructor() { }

  ngOnInit() {
    this.resetFilter();
  }

  filterLevel2(index) {
    this.level2 = this.menu.level1[index].level2;
  }

  resetFilter() {
    let level2 = [];
    this.menu.level1.map(item => {
      level2 = level2.concat(item.level2);
    });
    setTimeout(() => this.level2 = level2, 150);
  }

  countWidth(str, fontSize = 24) {
    return Math.round(str.length * 0.6 * fontSize);
  }

}
