import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor() {

    }
    // This method will be used whenever a request is being made.
    // We can use to add global level params to request like JWT Token, so that we dont need to add it everytime
    // Also we have an ability to add it in particular requests too, like only GET or POST etc
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // console.log(request);
        // Creating a clone of the current request with also addition of Headers in the request and sending it through next object
        const newRequest = request.clone({
            headers : new HttpHeaders({
                "Authorization" : "Bearer akjsbdkJANqj234k2qwnsdkjankjn23kj1qkj3n42kwj4nfdwsmn3kjnkj2nqkwjndkjnqj3"
            })
        })
        return next.handle(newRequest);
    }
}