import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'mfe1';
  public readonly version = VERSION.major;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    const url = `${location.pathname.substr(1)}${location.search}`;
    this.router.navigateByUrl(url);
      window.addEventListener('popstate', () => {
      this.router.navigateByUrl(url);
    });
  }

}
