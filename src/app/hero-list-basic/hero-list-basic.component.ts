import { Component, OnInit,  Input } from '@angular/core';
import { Hero } from './../hero';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-hero-list-basic',
  templateUrl: './hero-list-basic.component.html',
  styleUrls: ['./hero-list-basic.component.css'],
  animations: [
  trigger('heroState', [
    state('inactive', style({opacity: 1,backgroundColor: "gray", transform: 'translateX(0) scale(1)'})),
    state('active', style({opacity: 1,backgroundColor: "blue", transform: 'translateX(0) scale(1.1)'})),

    transition('inactive => active', animate('200ms ease-in')),
    transition('active => inactive', animate('200ms ease-out')),

      // transition('void => inactive', [
      //     style({transform: 'translateX(-100%)'}),
      //     animate("200ms ease-in-out")
      //   ]),
      // transition('inactive => void', [
      //     animate(100, style({transform: 'translateX(100%)'}))
      //   ]),
      // transition('void => active', [
      //     style({transform: 'translateX(0) scale(0)'}),
      //     animate(400)
      //   ]),
      // transition('active => void', [
      //     animate(400, style({transform: 'translateX(0) scale(0)'}))
      //   ]),

      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0, backgroundColor: "gray",}),
          style({opacity: 1, transform: 'translateX(30px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-30px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])

    ])
  ]
})
export class HeroListBasicComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
