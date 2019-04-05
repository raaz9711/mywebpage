import { Component, OnInit } from '@angular/core';
// import {Heroes} from '../mock-heroes'
import{ HeroService } from '../hero.service'
import { Hero} from '../hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero='shaktimaan';
  // hero:Hero= {id:1,name:'superman'};
  // heroes = Heroes;
  selectedHero:Hero;

  heroes: Hero[];

  constructor(private heroservice:HeroService) { }

  ngOnInit() {
this.getHeroes();
  }

  
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  getHeroes() :void {
    this.heroservice.getHeroes().subscribe(heroes=> this.heroes =heroes);
  }

}
