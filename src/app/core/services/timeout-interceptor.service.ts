import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {

  // Configura el tiempo de espera en milisegundos
  private readonly DEFAULT_TIMEOUT = 60000; // 30 segundos

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            timeout(this.DEFAULT_TIMEOUT),
            catchError((error: HttpErrorResponse) => {
                if (error.name === 'TimeoutError') {
                return throwError(new Error('La solicitud ha superado el tiempso de espera'));
                }
                return throwError(error);
            })
        );
    }
}
