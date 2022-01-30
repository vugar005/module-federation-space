import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { WatchlistComponent } from './watchlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WatchlistComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [WatchlistComponent],
  imports: [CommonModule, MatTableModule, RouterModule.forChild(routes)],
})
export class WatchlistModule {}
