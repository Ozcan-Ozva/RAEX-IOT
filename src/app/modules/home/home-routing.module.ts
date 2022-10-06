import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentHeaderComponent } from './components/document-header/document-header.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'home',
    component: HomeComponent,
  },
  { 
    path: 'document-header',
    component: DocumentHeaderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
