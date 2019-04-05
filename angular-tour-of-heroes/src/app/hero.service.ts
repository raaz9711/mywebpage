import { Injectable } from '@angular/core';

import {Hero} from './hero';
import {Heroes} from './mock-heroes';
import{MessageService} from './message.service'
import { Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice:MessageService) { }

  getHeroes(): Observable<Hero[]> {
this.messageservice.add('HeroService,fetched heroes');
    
return of(Heroes);
  }
}
