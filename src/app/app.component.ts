import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes: Hero[];

  constructor() {
    this.add();
  }

  getHeroes(): Hero[] {
    return [
      // new Hero("sergiu", "active"),
      // new Hero("david", "active"),
      new Hero("bogdan", "inactive"),
      new Hero("titi", "inactive")

    ]
  }

  add() {
    this.heroes = this.getHeroes();
  }

  remove() {
    this.heroes = [];
  }
}
