import { Injectable } from '@angular/core';
import { Hero } from 'src/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }
  
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  
  getHero(id:number): Observable<Hero>{
    const hero = HEROES.find(h => h.id == id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
}
