import {BaseRequestOptions, RequestOptions, RequestOptionsArgs, Request, RequestMethod, Headers} from '@angular/http';

export class HeadersRequestOptions extends BaseRequestOptions {
  

  //Headers.append("name: string", "value: string")
  
    headers:Headers = new Headers({"X-Auth": 'darek.darek.darek'});
    
    constructor() {
        super();
        //this.headers.append('X-Auth', "darek.darek.darek");
        //this.token = token;
        //this.headers = new Headers({'X-Auth': "darek.darek.darek"})
        //this.headers.append('X-Auth', "darek.darek.darek");
        //this.headers.append('foo', 'bar');
    }
}

//https://auth0.com/blog/angular-2-series-part-3-using-http/