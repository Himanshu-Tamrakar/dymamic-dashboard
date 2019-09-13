import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: './angular-cdk/angular-cdk.module#AngularCdkModule'
  },
  { path: '',   redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FlexLayoutModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
