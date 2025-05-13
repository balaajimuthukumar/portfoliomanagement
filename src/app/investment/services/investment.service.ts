import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  constructor() {}

  submitInvestment(data: any): Observable<any> {
    return of({ message: 'Form submitted successfully', data }).pipe(
      delay(1000)
    );
  }
}
