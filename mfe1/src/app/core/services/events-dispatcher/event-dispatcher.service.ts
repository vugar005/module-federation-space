import { Injectable } from '@angular/core';
import { APP_KEY } from 'src/app/app.constants';
import { CustomEventConfig } from './event-disptacher.constants';

@Injectable({
  providedIn: 'root',
})
export class EventDispatcherService {
  public dispatchEvent(eventName: string, config?: CustomEventConfig): void {
    const eventNameUnique = `${APP_KEY}:${eventName}`;
    console.log(eventNameUnique);
    const event = new CustomEvent(eventNameUnique, config);
    window.dispatchEvent(event);
  }
}
