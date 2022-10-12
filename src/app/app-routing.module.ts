import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "tadig",
    pathMatch: "full",
  },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/home/home.module").then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "tadig",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
