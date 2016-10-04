import { Injectable, Inject }  from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';


@Injectable()

export class HeroService {
    private heroesUrl = 'http://localhost:3000/user';
    errorMessage: string;

    constructor(private http: Http) {


    }
    sendtHeroes(data) {
        console.info("wykonałem send node ssa" + this.heroesUrl);
        console.dir(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.heroesUrl, JSON.stringify(data), options).map(this.extractData)
        .catch(this.handleError).subscribe(
                data => this.saveJwt(data.username),
                err => this.logError(err)
            );
    }

    saveJwt(jwt: string) {
        if(jwt) localStorage.setItem('id_token', jwt)
    }

    logError(err: any) {
        console.log(err);
    }

    private extractData(res: Response) {
        console.info("test whether this method is reached");

        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        console.info("test whether this method is reached");

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}