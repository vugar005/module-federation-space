import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shell-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
