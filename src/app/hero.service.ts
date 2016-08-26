import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROES} from './mock-heroes'


@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    //just to simulate a slow connection
    getHeroesSlowly(): Promise<Hero[]> {
        
        return new Promise<Hero[]>(resolve=>setTimeout(()=>resolve(HEROES),2000));
    }
}