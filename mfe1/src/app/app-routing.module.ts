import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'mfe1',
    children: [
      { path: '', redirectTo: 'watchlist', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'watchlist',
        loadChildren: () =>
          import('./watchlist/watchlist.module').then((m) => m.WatchlistModule),
      },
      // { path: 'b', component: BComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
