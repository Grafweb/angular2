import {BaseRequestOptions,URLSearchParams, RequestOptions, RequestOptionsArgs, Request, RequestMethod, Headers} from '@angular/http';
import { Injectable, Inject }  from '@angular/core';
// export class HeadersRequestOptions extends BaseRequestOptions {
  

//   //Headers.append("name: string", "value: string")
  
//     //headers:Headers = new Headers({"X-Auth": 'darek.darek.darek'});
    
//     constructor() {
//         super();
//         //this.headers.append('X-Auth', "darek.darek.darek");
//         this.headers.append('Authorization', 'my-token');
//         this.headers.append('foo', 'bar');
//         //this.token = token;
//         //this.headers = new Headers({'X-Auth': "darek.darek.darek"})
//         //this.headers.append('X-Auth', "darek.darek.darek");
//         //this.headers.append('foo', 'bar');
//     }
// }
@Injectable()
export class HeadersRequestOptions extends BaseRequestOptions {
    
    //method: RequestMethod.Get;

    static auth:string = "asasas";
     
    headers:Headers = new Headers({'x-auth': HeadersRequestOptions.auth});

    body: any = "Angular";
    
    search: URLSearchParams = new URLSearchParams("coreTeam=true");

    // addHeader(headerName: string, headerValue: string ){
    //                 (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
    //             }

    merge(options?:RequestOptionsArgs):RequestOptions {
        options.headers = new Headers({'x-auth': HeadersRequestOptions.auth});
        console.info("wykonałdem merge");
        return super.merge(options);
    }

}
//http://restlet.com/blog/2016/04/12/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-2/
//https://auth0.com/blog/angular-2-series-part-3-using-http/