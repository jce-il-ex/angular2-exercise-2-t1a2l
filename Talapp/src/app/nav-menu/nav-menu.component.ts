import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  menu: MenuItem[];

  constructor() {
    this.menu = [
      new MenuItem('#', 'Link1'),
      new MenuItem('#', 'Link2'),
      new MenuItem('#', 'Link3'),
      new MenuItem('#', 'Link4')
    ];

   }

  ngOnInit() {
  }


}
