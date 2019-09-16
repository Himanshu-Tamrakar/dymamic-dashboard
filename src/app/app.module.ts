import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


const routes: Routes = [
  {
    path: 'learn',
    loadChildren: './angular-cdk/angular-cdk.module#AngularCdkModule'
  },
  {
    path: 'design',
    loadChildren: './designer/designer.module#DesignerModule'
  },
  { path: '',   redirectTo: 'design', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
