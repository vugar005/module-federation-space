import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { matcher: startsWith('mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
