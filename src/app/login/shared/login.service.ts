import { Injectable, Inject }  from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request, RequestMethod, BaseRequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { HeadersRequestOptions }  from './headers-default';

@Injectable()

export class LoginService { //extends BaseRequestOptions 
    private loginUrl = 'http://localhost:3000/logins';
    private getLoginUrl = 'http://localhost:3000/user';
    errorMessage: string;
    token: string;

    constructor(private http: Http) {
       //super();
    }

    session(data) {
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
                    this.token = tok;
                    this.getUser();
                    //this.saveJwt(data.username)
                },
                err => this.logError(err)
            );
    }

    getUser() {
        console.info("token" + this.token);
        let headers = new Headers({ 'X-Auth': this.token });
        let options = new RequestOptions({ headers: headers });
       return this.http.get(this.getLoginUrl, options).map(this.extractData)
                     .subscribe(
                        tok => {
                    console.info("data2" + tok);
                    var options = new BaseRequestOptions();
                    var req = new Request(options.merge({
                    headers: headers
                    }));

                    console.log('req.method:', req.headers);
                  // this.baseRequestOptions.headers = headers;
                    //this.saveJwt(data.username)
                    //https://books.google.pl/books?id=9LbjCwAAQBAJ&pg=PA203&lpg=PA203&dq=HttpModule+add+default+angular+2&source=bl&ots=WYebX7w5PM&sig=oPJ4enIkDQhMJqdGdA7pCUatWnU&hl=pl&sa=X&ved=0ahUKEwiIptzBjeDPAhXICCwKHbgqCBk4ChDoAQgjMAE#v=onepage&q=HttpModule%20add%20default%20angular%202&f=false
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
        console.dir(body);
        return body || {};
    }

    private handleError(error: any) {
        console.info("test whether this method is reached");

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}