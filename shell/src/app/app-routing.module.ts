import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Mfe1WrapperComponent } from './mfe1-wrapper/mfe1-wrapper.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { matcher: startsWith('mfe1'), component: Mfe1WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } },
  { matcher: startsWith('mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
