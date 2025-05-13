import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: unknown) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              console.error('Unauthorized: Please check your authentication.', error.message);
              break;
            case 500:
              console.error('Server Error: An unexpected error occurred on the server.', error.message);
              break;
            default:
              console.error(`Error ${error.status}: ${error.message}`);
              break;
          }
        } else {
          console.error('An unknown error occurred.', error);
        }

        // Rethrow the error after handling
        return throwError(() => new Error(error instanceof Error ? error.message : 'Unknown error'));
      })
    );
  }
}
