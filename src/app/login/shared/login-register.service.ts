import { Injectable, Inject }  from '@angular/core';
import { Http, Response, Headers, RequestOptions, HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';


@Injectable()

export class HeroService {
    private heroesUrl = 'http://localhost:3000/form';
    people: Object[];
    errorMessage: string;

    constructor(private http: Http) {


    }
    sendtHeroes(data) {
        console.info("wykonałem send node ssa" + this.heroesUrl);
        console.dir(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/
        //http://stackoverflow.com/questions/38043247/angular-2-http-post-request-is-not-being-called-out
        this.http.post(this.heroesUrl, JSON.stringify(data), options).map(this.extractData)
        .catch(this.handleError).subscribe(
                data => this.saveJwt(data.name),
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