import { ChangeDetectionStrategy, Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public readonly version = VERSION.major;

  constructor() { }

  ngOnInit(): void {
  }

}
