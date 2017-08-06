import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _showMenu: boolean = false;

  constructor() { }

  set showMenu(value: boolean) {
    this._showMenu = value;
  }

  get showMenu() {
    return this._showMenu;
  }

  ngOnInit() {
  }

}
