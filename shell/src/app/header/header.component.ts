import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly version = VERSION.major;
}
