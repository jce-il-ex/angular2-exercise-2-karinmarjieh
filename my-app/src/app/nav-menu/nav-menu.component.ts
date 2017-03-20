import { Component } from '@angular/core';
import { NavItemComponent } from "app/nav-item/nav-item.component";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  items:NavItemComponent[];

  constructor() {
    this.items = [new NavItemComponent("Main Menu"),
                  new NavItemComponent("Testers"),
                  new NavItemComponent("Links"),
                  new NavItemComponent("Forth")];
  }
}
