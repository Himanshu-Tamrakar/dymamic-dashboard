import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignerComponent } from './designer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '', component: DesignerComponent,
    children: [{
      path: "vflow", component: LayoutComponent
    },
    {
      path: "home", component: HomeComponent
    },
    { path: "", redirectTo: "home", pathMatch: "full" }]
  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DesignerRoutingModule { }
