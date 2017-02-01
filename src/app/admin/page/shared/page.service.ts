import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { LogsService }  from './../../shared/log.service';



@Injectable()
export class PageService {

    urlPage:string = "/admin/page";

    constructor(private http: Http, private logsService: LogsService) {
       //super();
    }

    sendPage(data) {
        console.info("wykonałem send node ssa" + this.urlPage);
        console.dir(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.urlPage, JSON.stringify(data)).map(this.extractData)
               .subscribe(
                data => {
                    console.info("data" + data);
                    //console.dir(tok);
                    //this.getUser();
                    //return data;                    
                },
                err => this.logsService.logError(err)
            );
    }

    private extractData(res: Response) {
        console.info("test whether this method is reached");
        console.dir(res);

        let body = res.json();
        console.dir(body);
        return body || {};
    }
}