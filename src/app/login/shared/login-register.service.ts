import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';


@Injectable()

export class HeroService {
    private heroesUrl = 'http://localhost:3000/form';

     constructor (private http: Http) {}
     sendtHeroes (data) {
         this.http.post(this.heroesUrl,data);
     }
}