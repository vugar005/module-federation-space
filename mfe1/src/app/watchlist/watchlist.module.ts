import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { WatchlistComponent } from './watchlist.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: WatchlistComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [WatchlistComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class WatchlistModule {}
