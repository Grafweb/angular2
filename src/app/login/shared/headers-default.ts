import {BaseRequestOptions, Request, RequestMethod, Headers} from '@angular/http';

export class HeadersRequestOptions extends BaseRequestOptions {
    token: string;
    constructor(token : string) {
        super();
        this.token = token;
        this.headers = new Headers({'X-Auth': this.token})
        //this.headers.append('X-Auth', this.token);
        //this.headers.append('foo', 'bar');
    }
}

//https://auth0.com/blog/angular-2-series-part-3-using-http/