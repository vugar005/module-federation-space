import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PollingService {
  public polling<T>(source: Observable<T>, interval: number): Observable<T> {
    return timer(0, interval).pipe(switchMap(() => source));
  }
}
