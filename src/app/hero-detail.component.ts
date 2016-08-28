import {Component, Input, OnInit} from'@angular/core';
import {Hero} from './hero'
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>

<button (click)="goBack()">Back</button>

`
})



export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero)
    })
  }
  goBack(): void {
    window.history.back();
  }

}