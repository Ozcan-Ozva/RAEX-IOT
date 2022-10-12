import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TadigListComponent } from './containers/tadig-list/tadig-list.component';
import { TadigPdfUiComponent } from './containers/tadig-pdf-ui/tadig-pdf-ui.component';

const routes: Routes = [
  {
    path: '',
    component: TadigListComponent,
  },
  {
    path: 'tadig-pdf/:id',
    component: TadigPdfUiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TadigRoutingModule {}
