import { Component, ChangeDetectionStrategy, VERSION } from '@angular/core';

@Component({
  selector: 'shell-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public readonly version = VERSION.full;
}
