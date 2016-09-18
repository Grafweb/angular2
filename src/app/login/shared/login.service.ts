import { Injectable, Inject }  from '@angular/core';
import { Http, Response, Headers, RequestOptions, HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class LoginService {
    private loginUrl = 'http://localhost:3000/logins';
    errorMessage: string;

    constructor(private http: Http) {
    }

    sendHeroes(data) {
        console.info("wykonałem send node ssa" + this.loginUrl);
        console.dir(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/
        //http://stackoverflow.com/questions/38043247/angular-2-http-post-request-is-not-being-called-out
        this.http.post(this.loginUrl, JSON.stringify(data), options).toPromise().then(this.extractData)
        .catch(this.handleError).then(
                tok => {
                    console.info("data" + tok);
                    console.dir(tok);
                    //this.saveJwt(data.username)
                },
                err => this.logError(err)
            );
    }

    saveJwt(jwt: string) {
        if(jwt) localStorage.setItem('id_token', jwt)
    }

    logError(err: any) {
        console.log("To jest dział err" + err);
    }

    private extractData(res: Response) {
        console.info("test whether this method is reached");
        console.dir(res);

        let body = res.json();
        console.dir(body.data);
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